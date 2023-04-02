import * as React from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";

interface IBasicModal {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: React.ReactNode;
  value: React.ReactNode;
  maxWidth?: number;
}

const BasicModal: React.FC<IBasicModal> = (props) => {
  const { open, setOpen, title, value, maxWidth } = props;

  return (
    <React.Fragment>
      {title}
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: maxWidth,
            borderRadius: "md",
            p: 6,
            boxShadow: "lg",
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: "calc(-1/4 * var(--IconButton-size))",
              right: "calc(-1/4 * var(--IconButton-size))",
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "background.body",
            }}
          />
          {value}
        </Sheet>
      </Modal>
    </React.Fragment>
  );
};

export default BasicModal;
