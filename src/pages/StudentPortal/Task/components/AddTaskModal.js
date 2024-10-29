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

export default function AddTaskModal({ task, setTask }) {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
    console.log(task);
  };

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
              name="title"
              label="Task Title"
              icon={<AddTaskIcon />}
              value={task.title}
              handleChange={handleChange}
            />
            <DropDown
              label={"Priority Level"}
              name={"priorityLevel"}
              options={options}
              value={task.priorityLevel}
              handleChange={handleChange}
            />
            <DropDown
              label={"Status"}
              name={"status"}
              options={options2}
              value={task.status}
              handleChange={handleChange}
            />
            <Input
              type={"date"}
              name={"date"}
              label={"Deadline"}
              icon={<DateRangeIcon />}
              value={task.date}
              handleChange={handleChange}
            />
            <Input
              type={"text"}
              label={"Description"}
              name={"description"}
              rows={4}
              multiline
              value={task.description}
              handleChange={handleChange}
            />
            <BlueButton title={"Submit"} />
          </form>
        </Box>
      </Modal>
    </div>
  );
}
