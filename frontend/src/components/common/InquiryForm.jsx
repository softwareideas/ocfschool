import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const GRADES = [
  "Pre-Primary",
  "Primary (I-V)",
  "Middle (VI-VIII)",
  "High School (IX-X)",
  "Higher Secondary (XI-XII)",
];

const InquiryForm = ({ variant = "contact" }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Please enter a valid email address.";
    if (!/^[0-9+\-\s]{7,15}$/.test(form.phone))
      return "Please enter a valid phone number.";
    if (!form.message.trim()) return "Please enter a message.";
    return null;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success(
        "Thank you! Your inquiry has been received. Our team will contact you shortly.",
      );
      setForm({ name: "", email: "", phone: "", grade: "", message: "" });
    }, 700);
  };

  return (
    <form
      data-testid={`inquiry-form-${variant}`}
      onSubmit={onSubmit}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-navy">
            Full Name
          </Label>
          <Input
            id="name"
            data-testid="inquiry-name-input"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-navy">
            Phone Number
          </Label>
          <Input
            id="phone"
            data-testid="inquiry-phone-input"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="bg-white"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-navy">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            data-testid="inquiry-email-input"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="bg-white"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-navy">Grade of Interest</Label>
          <Select value={form.grade} onValueChange={(v) => update("grade", v)}>
            <SelectTrigger
              data-testid="inquiry-grade-select"
              className="bg-white"
            >
              <SelectValue placeholder="Select grade" />
            </SelectTrigger>
            <SelectContent>
              {GRADES.map((g) => (
                <SelectItem key={g} value={g}>
                  {g}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-navy">
          Message
        </Label>
        <Textarea
          id="message"
          data-testid="inquiry-message-input"
          placeholder="Tell us how we can help you..."
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="bg-white"
        />
      </div>

      <button
        type="submit"
        data-testid="inquiry-submit-button"
        disabled={submitting}
        className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-maroon disabled:opacity-70"
      >
        <Send className="h-4 w-4" />
        {submitting ? "Sending..." : "Submit Inquiry"}
      </button>
    </form>
  );
};

export default InquiryForm;
