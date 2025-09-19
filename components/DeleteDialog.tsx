import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { deleteCompanion } from "@/lib/actions/companion.actions";
import { Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

interface DeleteCompanionProps {
  showDialog: boolean;
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}

const DeleteDialog = ({
  showDialog,
  setShowDialog,
  id,
}: DeleteCompanionProps) => {
  const pathname = usePathname();
 const [isLoading, setIsLoading] = useState(false);
  const removeCompanion = async () => {
    setIsLoading(true)
    const isDeleted = await deleteCompanion(id, pathname);
    if (isDeleted) {
      toast.success("Companion is Deleted Successfully");
    } else {
      toast.error("Cannot delete Companion: Session already exists.");
    }
    setShowDialog(false);
     setIsLoading(false)
  };
  return (
    <AlertDialog open={showDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle><p className="text-lg font-bold">Are you absolutely sure?</p></AlertDialogTitle>
          <AlertDialogDescription className="text-sm">
           This action cannot be undone. This will permanently delete your
            Companion
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setShowDialog(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction disabled={isLoading} onClick={removeCompanion} className="bg-red-700">
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? "" : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDialog;
