import {
 Dialog, DialogContent, DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function DeleteDialog({ open,onClose,onConfirm }){

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>Delete Movie?</DialogTitle>

        <div className="flex gap-2 mt-3">
          <Button variant="destructive" onClick={onConfirm}>
            Delete
          </Button>

          <Button onClick={onClose}>Cancel</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
