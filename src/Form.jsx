import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarToday as CalendarIcon } from "@mui/icons-material"
import { format } from "date-fns"
import {
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material"

// Form schema with validation rules
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  date: z
    .string({
      required_error: "Please select a date",
    })
    .refine((date) => new Date(date) >= new Date(new Date().setHours(0, 0, 0, 0)), {
      message: "Date cannot be in the past",
    }),
  time: z.string({
    required_error: "Please select a time",
  }),
  guests: z.string({
    required_error: "Please select number of guests",
  }),
  specialRequests: z.string().optional(),
})

export default function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Initialize form with validation schema
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      specialRequests: "",
    },
  })

  // Handle form submission
  async function onSubmit(data) {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("Form submitted:", data)
      setIsSuccess(true)
      form.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Generate time slots from 11:00 AM to 10:00 PM
  const timeSlots = Array.from({ length: 23 }, (_, i) => {
    const hour = Math.floor(i / 2) + 11
    const minute = i % 2 === 0 ? "00" : "30"
    const period = hour >= 12 ? "PM" : "AM"
    const displayHour = hour > 12 ? hour - 12 : hour
    return `${displayHour}:${minute} ${period}`
  })

  // Generate guest options from 1 to 10
  const guestOptions = Array.from({ length: 10 }, (_, i) => (i + 1).toString())

  if (isSuccess) {
    return (
      <Box textAlign="center" p={4} bgcolor="white" borderRadius={2} boxShadow={3}>
        <Box display="flex" justifyContent="center" mb={2}>
          <Box bgcolor="green.100" borderRadius="50%" p={2}>
            <CalendarIcon color="success" />
          </Box>
        </Box>
        <Typography variant="h5" fontWeight="bold" color="textPrimary" mb={2}>
          Reservation Confirmed!
        </Typography>
        <Typography color="textSecondary" mb={4}>
          Thank you for your reservation. We've sent a confirmation to your email.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setIsSuccess(false)}>
          Make Another Reservation
        </Button>
      </Box>
    )
  }

  return (
    <Box p={4} bgcolor="white" borderRadius={2} boxShadow={3}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }} gap={2}>
          <FormControl fullWidth>
            <TextField
              label="Full Name"
              placeholder="John Doe"
              {...form.register("name")}
              error={!!form.formState.errors.name}
              helperText={form.formState.errors.name?.message}
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              label="Email"
              placeholder="john.doe@example.com"
              {...form.register("email")}
              error={!!form.formState.errors.email}
              helperText={form.formState.errors.email?.message}
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              label="Phone Number"
              placeholder="(123) 456-7890"
              {...form.register("phone")}
              error={!!form.formState.errors.phone}
              helperText={form.formState.errors.phone?.message}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="guests-label">Number of Guests</InputLabel>
            <Select
              labelId="guests-label"
              {...form.register("guests")}
              error={!!form.formState.errors.guests}
              defaultValue=""
            >
              {guestOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option} {Number.parseInt(option) === 1 ? "Guest" : "Guests"}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText error={!!form.formState.errors.guests}>
              {form.formState.errors.guests?.message}
            </FormHelperText>
          </FormControl>

          <FormControl fullWidth>
            <TextField
              label="Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              {...form.register("date")}
              error={!!form.formState.errors.date}
              helperText={form.formState.errors.date?.message}
            />
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id="time-label">Time</InputLabel>
            <Select
              labelId="time-label"
              {...form.register("time")}
              error={!!form.formState.errors.time}
              defaultValue=""
            >
              {timeSlots.map((time) => (
                <MenuItem key={time} value={time}>
                  {time}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText error={!!form.formState.errors.time}>
              {form.formState.errors.time?.message}
            </FormHelperText>
          </FormControl>
        </Box>

        <FormControl fullWidth margin="normal">
          <TextField
            label="Special Requests (Optional)"
            placeholder="Please let us know if you have any special requests or dietary requirements."
            multiline
            rows={4}
            {...form.register("specialRequests")}
          />
          <FormHelperText>We'll do our best to accommodate your requests.</FormHelperText>
        </FormControl>

        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary" fullWidth disabled={isSubmitting}>
            {isSubmitting ? <CircularProgress size={24} /> : "Reserve Table"}
          </Button>
        </Box>
      </form>
    </Box>
  )
}