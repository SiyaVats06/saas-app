"use client";
import { addToBookmark, removeBookmark } from "@/lib/actions/companion.actions";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

interface CompanionProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
  bookmarked: boolean;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
}

const CompanionCard = ({id,name,topic,subject,bookmarked,duration,color,setShowDialog,setId,}: CompanionProps) => {
  const pathname = usePathname();

  const handleBookmark = async () => {
    if (bookmarked) {
      await removeBookmark(id, pathname);
      toast.success("Companion removed from Bookmarks");
    } else {
      await addToBookmark(id, pathname);
      toast.success("Companion added to Bookmarks");
    }
  };

  const removeCompanion = async () => {
    setShowDialog(true);
    setId(id);
    console.log(id);
  };

  return (
    <article className="companion-card" style={{ background: color }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <div className="flex gap-1">
          <button onClick={handleBookmark} className="companion-bookmark">
            <Image
              src={
                bookmarked
                  ? "/icons/bookmark-filled.svg"
                  : "/icons/bookmark.svg"
              }
              alt="bookmark"
              width={12.5}
              height={15}
            />
          </button>
          <button className="cursor-pointer" onClick={removeCompanion}>
            <Trash2 />
          </button>
        </div>
      </div>
      <h4 className="text-2xl font-bold">{name}</h4>
      <h6 className="text-sm">{topic}</h6>
      <div className="flex justify-start gap-2">
        <Image
          src="/icons/clock.svg"
          alt="duration"
          width={13.5}
          height={13.5}
        />
        <h6 className="text-sm">{duration} mins duration</h6>
      </div>
      <Link href={`/companions/${id}`}>
        <button className="btn-primary w-full justify-center">
          Launch Lesson
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;
