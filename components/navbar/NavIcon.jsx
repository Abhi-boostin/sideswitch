"use client";
import React from "react";

export default function NavIcon() {
	return (
		<div className="group relative h-10 w-10 cursor-pointer max-sm:h-6 max-sm:w-6">
			<div className="absolute top-0 left-0 h-0.5 w-full bg-white max-sm:h-[1px]" />
			<div className="absolute top-1/3 left-1/2 h-0.5 w-full -translate-x-1/2 bg-white transition-all max-sm:h-[1px] md:group-hover:top-1/2 md:group-hover:left-0 md:group-hover:-rotate-90" />
			<div className="absolute top-2/3 left-1/2 h-0.5 w-full -translate-x-1/2 bg-white transition-all max-sm:h-[1px] md:group-hover:top-1/2 md:group-hover:left-full md:group-hover:rotate-90" />
			<div className="absolute bottom-0 left-0 h-0.5 w-full bg-white max-sm:h-[1px]" />
		</div>
	);
} 