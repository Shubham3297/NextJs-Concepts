"use client";

// import "./globals.css";
import React, { Children, useState } from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const ErrorSimulator = ({
  message = "An error occured.",
}: {
  message?: string;
}) => {
  const [error, setError] = useState(false);
  if (error) throw new Error(message);

  return (
    <>
      <button onClick={() => setError(true)}>Simulator Error</button>
    </>
  );
};

export const ErrorWrapper = ({ children }: WrapperProps) => {
  return (
    <>
      <ErrorSimulator message="Simulated error in root layout" />
      {children}
    </>
  );
};
