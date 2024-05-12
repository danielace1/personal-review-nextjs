"use client";
import Textarea from "@/components/forms/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ReactStars from "react-rating-stars-component";
import FormLabel from "@/components/forms/FormLabel";
import FormInput from "@/components/forms/FormInput ";

const Schema = z.object({
  contentQuality: z
    .string()
    .min(10, { message: "Enter atleast 10 characters" })
    .max(200),

  howCanweImprove: z
    .string()
    .min(10, { message: "Enter atleast 10 characters" })
    .max(200),

  yourname: z
    .string()
    .min(3, { message: "Enter atleast 3 characters" })
    .max(20, { message: "Enter atmost 20 characters" }),
});

const InstagramReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(Schema) });

  const sendToFirebase = (data) => {
    console.log(data);
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="bg-white m-3 p-5 rounded">
      <h4 className="font-semibold">Share your reviews</h4>

      <form
        action=""
        className="my-5 space-y-3"
        onSubmit={handleSubmit(sendToFirebase)}
      >
        <FormLabel text="Overall Ratings" required>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={30}
            activeColor="#ffd700"
          />
        </FormLabel>

        <Textarea
          label="What do you think about the instagram content?"
          name="contentQuality"
          placeholder="Explain briefly!"
          register={register("contentQuality")}
          error={errors.contentQuality}
          required
        />
        <Textarea
          label="How we can Improve?"
          name="howCanweImprove"
          register={register("howCanweImprove")}
          error={errors.howCanweImprove}
          required
        />

        <FormInput
          label="Your Name?"
          name="yourname"
          placeholder="Enter your name"
          register={register("yourname")}
          error={errors.yourname}
          required
        />

        <div>
          <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InstagramReview;
