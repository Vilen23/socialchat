import React from "react";
import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";
import { X } from "lucide-react";
import Image from "next/image";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
    const fileType = value?.split(".").pop();

    if(value && fileType !=="pdf"){
        return (
            <div className="relative w-32 h-32">
                <Image src={value} layout="fill" objectFit="cover" alt="upload" className="rounded-full" />
                <button
                    onClick={() => onChange(undefined)}
                    className="absolute top-0 right-0 p-1 text-white bg-black bg-opacity-50 rounded-full"
                >
                    <X size={24} />
                </button>
            </div>
        );
    }


  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error:Error)=>{
        console.log(error);
      }}
    />
  );
};

export default FileUpload;