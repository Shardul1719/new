// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import *as  z from "zod";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card } from "@/components/ui/card";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { toast } from "sonner";
// import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
// import { motion } from "framer-motion";

// const formSchema = z.object({
//   fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
//   telephone: z.string().trim().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone "),
//   email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
//   city: z.string().trim().min(2, "Please enter your city").max(100, "City name must be less than 100 characters"),
//   missedEMI: z.enum(["yes", "no"], { required_error: "Please select an option" }),
// });

// // type FormData = z.infer<typeof formSchema>;

// const ContactForm = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     setValue,
//     reset,
//   } = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//   });

//   const onSubmit = async (data) => {
//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1500));
      
//       console.log("Form submitted:", data);
      
//       setIsSubmitted(true);
//       toast.success("Thank you! We'll contact you shortly.", {
//         description: "Our debt management experts will reach out within 24 hours.",
//       });
      
//       reset();
      
//       // Reset success message after 5 seconds
//       setTimeout(() => setIsSubmitted(false), 5000);
//     } catch (error) {
//       toast.error("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <section id="contact" className="py-20 bg-accent/30">
//       <div className="container mx-auto px-4">
//         <motion.div 
//           className="text-center mb-16 space-y-4"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
//             Get Your <span className="text-primary">FREE</span> Debt Consultation
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//             Take the first step towards financial freedom. Our experts are ready to help you today.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Information */}
//           <motion.div 
//             className="space-y-6"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <Card className="p-8 bg-primary text-primary-foreground">
//               <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
//               <div className="space-y-4">
//                 <div className="flex items-start space-x-3">
//                   <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-semibold">Phone</p>
//                     <a href="tel:+917304312983" className="hover:underline">+91 730 431 2983</a>
//                     <br />
//                     <a href="tel:02268762605" className="hover:underline">022 6876 2605 (New Customer)</a>
//                     <br />
//                     <a href="tel:02268762652" className="hover:underline">022 6876 2652 (Existing Customer)</a>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-semibold">Email</p>
//                     <a href="mailto:info@singledebt.in" className="hover:underline">info@singledebt.in</a>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-semibold">Office Address</p>
//                     <p>Andheri, Mumbai, Maharashtra</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-semibold">Office Hours</p>
//                     <p>9:30 AM - 6:00 PM</p>
//                     <p className="text-sm opacity-90">Open 7 days a week (including weekends)</p>
//                   </div>
//                 </div>
//               </div>
//             </Card>

//             <Card className="p-6 bg-accent border-l-4 border-l-primary">
//               <h4 className="font-semibold text-lg mb-3 text-foreground">Important Notice</h4>
//               <ul className="space-y-2 text-sm text-muted-foreground">
//                 <li className="flex items-start">
//                   <span className="text-primary mr-2">•</span>
//                   <span>This is NOT a loan service</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-primary mr-2">•</span>
//                   <span>We provide legal advice related to debts</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-primary mr-2">•</span>
//                   <span>All consultations are completely FREE</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="text-primary mr-2">•</span>
//                   <span>Your information is 100% confidential</span>
//                 </li>
//               </ul>
//             </Card>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <Card className="p-8">
//             {isSubmitted ? (
//               <div className="text-center py-12 space-y-4">
//                 <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
//                   <CheckCircle2 className="w-12 h-12 text-primary" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
//                 <p className="text-muted-foreground">
//                   We've received your request. Our debt management expert will contact you within 24 hours.
//                 </p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//                 <div className="space-y-2">
//                   <Label htmlFor="fullName">Full Name *</Label>
//                   <Input
//                     id="fullName"
//                     {...register("fullName")}
//                     placeholder="Enter your full name"
//                     className={errors.fullName ? "border-destructive" : ""}
//                   />
//                   {errors.fullName && (
//                     <p className="text-sm text-destructive">{errors.fullName.message}</p>
//                   )}
//                 </div>

//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="telephone">Phone Number *</Label>
//                     <Input
//                       id="telephone"
//                       {...register("telephone")}
//                       placeholder="10-digit "
//                       maxLength={10}
//                       className={errors.telephone ? "border-destructive" : ""}
//                     />
//                     {errors.telephone && (
//                       <p className="text-sm text-destructive">{errors.telephone.message}</p>
//                     )}
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email Address *</Label>
//                     <Input
//                       id="email"
//                       type="email"
//                       {...register("email")}
//                       placeholder="your@email.com"
//                       className={errors.email ? "border-destructive" : ""}
//                     />
//                     {errors.email && (
//                       <p className="text-sm text-destructive">{errors.email.message}</p>
//                     )}
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="city">Your City *</Label>
//                   <Input
//                     id="city"
//                     {...register("city")}
//                     placeholder="e.g., Mumbai"
//                     className={errors.city ? "border-destructive" : ""}
//                   />
//                   {errors.city && (
//                     <p className="text-sm text-destructive">{errors.city.message}</p>
//                   )}
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="missedEMI">Have you missed  EMI in the last 3 months? *</Label>
//                   <Select onValueChange={(value) => setValue("missedEMI", value)}>
//                     <SelectTrigger className={errors.missedEMI ? "border-destructive" : ""}>
//                       <SelectValue placeholder="Select an option" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="yes">Yes</SelectItem>
//                       <SelectItem value="no">No</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   {errors.missedEMI && (
//                     <p className="text-sm text-destructive">{errors.missedEMI.message}</p>
//                   )}
//                 </div>

//                 <Button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
//                 >
//                   {isSubmitting ? "Submitting..." : "Get Free Consultation Now"}
//                 </Button>

//                 <p className="text-xs text-center text-muted-foreground">
//                   By submitting this form, you agree to our privacy policy and terms of service.
//                 </p>
//               </form>
//             )}
//           </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"; // Corrected Zod import alias
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  telephone: z.string().trim().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone "),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  city: z.string().trim().min(2, "Please enter your city").max(100, "City name must be less than 100 characters"),
  missedEMI: z.enum(["yes", "no"], { required_error: "Please select an option" }),
});

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset,
  } = useForm({
    // FIX: Added defaultValues to ensure formState.errors is initialized immediately
    defaultValues: {
      fullName: "",
      telephone: "",
      email: "",
      city: "",
      missedEMI: undefined, // Use undefined for unselected select value
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Form submitted:", data);
      
      setIsSubmitted(true);
      toast.success("Thank you! We'll contact you shortly.", {
        description: "Our debt management experts will reach out within 24 hours.",
      });
      
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Get Your <span className="text-primary">FREE</span> Debt Consultation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards financial freedom. Our experts are ready to help you today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-primary text-primary-foreground">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+917304312983" className="hover:underline">+91 730 431 2983</a>
                    <br />
                    <a href="tel:02268762605" className="hover:underline">022 6876 2605 (New Customer)</a>
                    <br />
                    <a href="tel:02268762652" className="hover:underline">022 6876 2652 (Existing Customer)</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@singledebt.in" className="hover:underline">info@singledebt.in</a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Office Address</p>
                    <p>Andheri, Mumbai, Maharashtra</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Office Hours</p>
                    <p>9:30 AM - 6:00 PM</p>
                    <p className="text-sm opacity-90">Open 7 days a week (including weekends)</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-accent border-l-4 border-l-primary">
              <h4 className="font-semibold text-lg mb-3 text-foreground">Important Notice</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>This is NOT a loan service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>We provide legal advice related to debts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>All consultations are completely FREE</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Your information is 100% confidential</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
                <p className="text-muted-foreground">
                  We've received your request. Our debt management expert will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    {...register("fullName")}
                    placeholder="Enter your full name"
                    className={errors.fullName ? "border-destructive" : ""}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telephone">Phone Number *</Label>
                    <Input
                      id="telephone"
                      {...register("telephone")}
                      placeholder="10-digit "
                      maxLength={10}
                      className={errors.telephone ? "border-destructive" : ""}
                    />
                    {errors.telephone && (
                      <p className="text-sm text-destructive">{errors.telephone.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="your@email.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">Your City *</Label>
                  <Input
                    id="city"
                    {...register("city")}
                    placeholder="e.g., Mumbai"
                    className={errors.city ? "border-destructive" : ""}
                  />
                  {errors.city && (
                    <p className="text-sm text-destructive">{errors.city.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="missedEMI">Have you missed  EMI in the last 3 months? *</Label>
                  <Select onValueChange={(value) => setValue("missedEMI", value)}>
                    <SelectTrigger className={errors.missedEMI ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.missedEMI && (
                    <p className="text-sm text-destructive">{errors.missedEMI.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? "Submitting..." : "Get Free Consultation Now"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;