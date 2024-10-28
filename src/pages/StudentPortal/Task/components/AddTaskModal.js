import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Modal from "@mui/material/Modal";
import { Divider, IconButton } from "@mui/material";
import Input from "../../../../components/Form/Input";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DropDown from "../../../../components/Form/DropDown";
import DateRangeIcon from "@mui/icons-material/DateRange";
import BlueButton from "../../../../components/Form/BlueButton";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "6px",
  p: 1,
};

export default function AddTaskModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const options = [
    { label: "High", value: "High" },
    { label: "Medium", value: "Medium" },
    { label: "Low", value: "Low" },
  ];

  const options2 = [
    { label: "Pending", value: "Pending" },
    { label: "In Progress", value: "In Progress" },
    { label: "Completed", value: "Completed" },
  ];

  return (
    <div>
      <Button onClick={handleOpen} className="task__button">
        AddTask
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <header className="flex items-center mb-2">
            <IconButton onClick={() => handleClose()}>
              <ArrowBackIosIcon />
            </IconButton>
            <h1 className="text-center w-[80%] text-xl">Add Task</h1>
          </header>
          <Divider />
          <form className="mt-4">
            <Input
              type="text"
              placeholder={"Enter Your Task"}
              name="name"
              label="Task Title"
              icon={<AddTaskIcon />}
            />
            <DropDown label={"Priority Level"} options={options} />
            <DropDown label={"Status"} options={options2} />
            <Input type={"date"} label={"Deadline"} icon={<DateRangeIcon />} />
            <Input type={"text"} label={"Description"} rows={4} multiline />
            <BlueButton title={"Submit"} />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
