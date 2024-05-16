import { useState, useRef } from "react";

type OTPProps = {
   length: number;
};

export const OTPModal = ({ length }: OTPProps) => {
   const [otp, setOtp] = useState(new Array(length).fill(""));
   const inputRef = useRef<HTMLInputElement[] | null>([]);

   function handleChange(index: number, e: React.FormEvent<HTMLInputElement>) {
      let value = e.currentTarget.value;

      if (isNaN(Number(value))) return;

      const newOpt = [...otp];
      newOpt[index] = value.substring(value.length - 1);
      setOtp(newOpt);

      if (value && index < length - 1) {
         inputRef.current[index + 1]?.focus();
      }
   }

   function handleKeyDown(index: number, e: React.FormEvent<HTMLInputElement>) {
      if (e.key === "Backspace" && !otp[index] && index > 0) {
         inputRef.current[index - 1]?.focus();
      }
   }

   return (
      <div className="otpContainer">
         <h1>Login with OTP</h1>
         {otp.map((inp, idx) => (
            <input
               value={inp}
               ref={(el) => (inputRef.current[idx] = el)}
               type="text"
               key={idx}
               onChange={(e) => handleChange(idx, e)}
               onKeyDown={(e) => handleKeyDown(idx, e)}
            />
         ))}
      </div>
   );
};
