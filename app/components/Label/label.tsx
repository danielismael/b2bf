'use client';
import React from "react";

const Label = ({
   children,
}: {
    children: React.ReactNode
})  => {
    return <label className="text-14px font-normal text-black font-inter mb-3 block">{children}</label>
}

export default Label;