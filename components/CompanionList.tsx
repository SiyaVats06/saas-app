import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";
import { getSubjectColor } from "../lib/utils";


interface CompanionListProps {
  title?: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionList = async ({title, companions, classNames,}: CompanionListProps) => {


  return (
    <article className="border rounded-2xl p-8 w-full">
      <h3 className="text-3xl font-bold">{title}</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lessons</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>

        {companions?.map(({id, subject, name, topic, duration}:Companion,index) => (
          <TableBody key={index}>
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
                      <h4 className="text-2xl font-bold">{name}</h4>
                      <h6 className="text-lg">{topic}</h6>
                    </div>
                  </div>
                </Link>
              </TableCell>
              <TableCell>
                <div className="subject-badge">{subject}</div>
              </TableCell>
              <TableCell>
                <h6 className="text-sm">{duration} mins</h6>
              </TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
    </article>
  );
};

export default CompanionList;
