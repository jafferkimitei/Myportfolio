import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    const submitted = router.query.submitted;

    if (!submitted) {
      router.push('/');
    }
  }, [router, router.query]);
  return (
    <div className="max-w-3xl mx-auto p-6 bg-black">
     <Image
        src="/images/success.webp" 
        alt="Thank You Image"
        className="w-32 h-32 rounded-full mb-4"
      />
    <h1 className="text-3xl font-bold mb-4 text-white">Thank you for your submission!</h1>
    <p className="text-lg mb-8 text-white">
      We have received your email. Please wait for our response.
    </p>
    <Link href="/" passHref legacyBehavior>
      <button className="text-blue-500 hover:underline">Go back to Home</button>
    </Link>
  </div>
);
};
export default SuccessPage;
