import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";
import { getSubjectColor } from "../lib/utils";
import { getRecentSessions } from "@/lib/actions/companion.actions";

interface CompanionListProps {
  title?: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionList = async ({title, companions, classNames,}: CompanionListProps) => {


  return (
    <article className="border rounded-2xl p-8">
      <h2 className="text-3xl font-bold">{title}</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lessons</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>

        {companions?.map(({id, subject, name, topic, duration}:Companion) => (
          <TableBody key={id}>
            <TableRow>
              <TableCell>
                <Link href={`/companions/${id}`}>
                  <div className="flex gap-2 justify-start items-center">
                    <div
                      className="flex justify-center items-center size-[72px] rounded-b-lg"
                      style={{
                        backgroundColor: getSubjectColor(subject),
                      }}
                    >
                      <Image
                        src={`/icons/${subject}.svg`}
                        alt="subject-icon"
                        width={35}
                        height={35}
                      />
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <h2 className="text-2xl font-bold">{name}</h2>
                      <p className="text-lg">{topic}</p>
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <div className="subject-badge">{subject}</div>
              </TableCell>
              <TableCell>
                <p className="text-sm">{duration} mins</p>
              </TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
    </article>
  );
};

export default CompanionList;
