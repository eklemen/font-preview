import React from "react";

const CircleShiplap = (props) => {
  return props.small ? // small circle
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 500 500"
      height="100%"
      width="100%"
      {...props}
    >
      <path
        style={{
          stroke: "#000",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "none",
          fillRule: "nonzero",
          opacity: 1,
        }}
        vectorEffect="non-scaling-stroke"
        transform="matrix(2 0 0 2 250 250)"
        d="M0-100c55.2 0 100 44.8 100 100S55.2 100 0 100-100 55.2-100 0-55.2-100 0-100z"
        strokeLinecap="round"
      />
      <path
        style={{
          stroke: "#000",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "#fff",
          fillOpacity: 0,
          fillRule: "nonzero",
          opacity: 1,
        }}
        vectorEffect="non-scaling-stroke"
        transform="translate(250 250)"
        d="M-200.955 0h401.91z"
        strokeLinecap="round"
        fill="none"
      />
      <path
        style={{
          stroke: "#000",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "#fff",
          fillOpacity: 0,
          fillRule: "nonzero",
          opacity: 1,
        }}
        vectorEffect="non-scaling-stroke"
        transform="matrix(1.22 0 0 1.22 250.19 138.27)"
        d="M-136.495 0h272.992-272.992z"
        strokeLinecap="round"
        fill="none"
      />
      <path
        style={{
          stroke: "#000",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "#fff",
          fillOpacity: 0,
          fillRule: "nonzero",
          opacity: 1,
        }}
        vectorEffect="non-scaling-stroke"
        transform="matrix(1.22 0 0 1.22 250.19 361.84)"
        d="M-136.495 0h272.992-272.992z"
        strokeLinecap="round"
        fill="none"
      />
    </svg> : // large circle
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 500 500"
      {...props}
    >
      <path
        style={{
          stroke: "#000",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "none",
          fillRule: "nonzero",
          opacity: 1,
        }}
        vectorEffect="non-scaling-stroke"
        transform="matrix(2 0 0 2 250 250)"
        d="M0-100c55.2 0 100 44.8 100 100S55.2 100 0 100-100 55.2-100 0-55.2-100 0-100z"
        strokeLinecap="round"
      />
      <path
        style={{
          stroke: "#000",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "#fff",
          fillOpacity: 0,
          fillRule: "nonzero",
          opacity: 1,
        }}
        vectorEffect="non-scaling-stroke"
        transform="translate(250 250)"
        d="M-200.955 0h401.91z"
        strokeLinecap="round"
        fill="none"
      />
      <path
        style={{
          stroke: "#000",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "#fff",
          fillOpacity: 0,
          fillRule: "nonzero",
          opacity: 1,
        }}
        vectorEffect="non-scaling-stroke"
        transform="translate(250 104.56)"
        d="M-136.495 0h272.992-272.992z"
        strokeLinecap="round"
        fill="none"
      />
      <path
        style={{
          stroke: "#000",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "#fff",
          fillOpacity: 0,
          fillRule: "nonzero",
          opacity: 1,
        }}
        vectorEffect="non-scaling-stroke"
        transform="matrix(1.37 0 0 1.37 250.33 177.56)"
        d="M-136.495 0h272.992-272.992z"
        strokeLinecap="round"
        fill="none"
      />
      <path
        style={{
          stroke: "#000",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "#fff",
          fillOpacity: 0,
          fillRule: "nonzero",
          opacity: 1,
        }}
        vectorEffect="non-scaling-stroke"
        transform="matrix(1.37 0 0 1.37 250 320.42)"
        d="M-136.495 0h272.992-272.992z"
        strokeLinecap="round"
        fill="none"
      />
      <path
        style={{
          stroke: "#000",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeDashoffset: 0,
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          fill: "#fff",
          fillOpacity: 0,
          fillRule: "nonzero",
          opacity: 1,
        }}
        vectorEffect="non-scaling-stroke"
        transform="translate(250 395.99)"
        d="M-136.495 0h272.992-272.992z"
        strokeLinecap="round"
        fill="none"
      />
    </svg>;
}

export default CircleShiplap;
