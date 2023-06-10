
import { FaKeyboard } from "react-icons/fa";
import { BsUpload } from "react-icons/bs";
import { FaRegDotCircle } from "react-icons/fa";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { MdCheckCircle } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { AiOutlineMessage } from 'react-icons/ai';
import { AiOutlineDown } from 'react-icons/ai';



const randomId = `input_${Math.random()
  .toString(36)
  .substring(2)}_${Date.now()}`;
export const FormObjects = [
  {
    id: 1,
    title: "Checkbox Group",
    icon: <BsList color={"#AAA"} />,
    data: {
      type: "checkboxGroup",
      label: "checkboxGroup",
      attributes: {
        name: "colors",
        checkboxes: [
          {
            id: randomId,
            value: "red",
            label: "Red",
            name:'',
            checked: false,
          },
          {
            id: randomId,
            value: "blue",
            label: "Blue",
            name:'',
            checked: true,
          },
          {
            id: randomId,
            value: "green",
            label: "Green",
            name:'',
            checked: false,
          },
        ],
        validation: {
          required: false,
          disabled: false,
          minSelected: 0,
          maxSelected: Infinity,
        },
      },
    },
  },
  {
    id: 2,
    title: "Checkbox",
    icon:  <AiOutlineCheckSquare color="#AAA" />,
    data: {
      type: "checkbox",
      label: "checkbox",
      attributes: {
        name: "",
        id: randomId,
        value: "ReminderMe",
        label: "Reminder me",
        checked: false,
        validation: {
          required: false,
          disabled: false,
        },
      },
    },
  },
  {
    id: 3,
    title: "Date Field",
    icon: <FaCalendar color="#AAA" />,
    data: {
      type: "date",
      label: "Date Field",
      attributes: {
        name: "",
        id: randomId,
        value: "",
        validation: {
          required: false,
          disabled: false,
        },
      },
    },
  },

  {
    id: 4,
    title: "File Upload",
    icon: <BsUpload color="#AAA" />,
    data: {
      type: "file",
      label: "File Upload",
      attributes: {
        name: "",
        id: randomId,
        validation: {
          required: false,
          disabled: false,
          accept: "",
        },
      },
    },
  },

  {
    id: 5,
    title: "Radio Group",
    icon: <FaRegDotCircle color="#AAA" />,
    data: {
      type: "radioGroup",
      label: "Radio Group",
      attributes: {
        name: "gender",
        radios: [
          {
            id: randomId,
            value: "male",
            label: "Male",
            checked: true,
          },
          {
            id: randomId,
            value: "female",
            label: "Female",
            checked: false,
          },
          {
            id: randomId,
            value: "other",
            label: "Other",
            checked: false,
          },
        ],
        validation: {
          required: false,
          disabled: false,
        },
      },
    },
  },

  {
    id: 6,
    title: "Select",
    icon: <AiOutlineDown color="#AAA" />,
    data: {
      type: "select",
      label: "Select Country",
      attributes: {
        name: "country",
        id: randomId,
        value: "",
        options: ["USA", "Canada", "UK", "Australia"],
        validation: {
          required: false,
          disabled: false,
        },
      },
    },
  },

  {
    id: 7,
    title: "Text Field",
    icon: <FaKeyboard color="#AAA" />,
    data: {
      type: "text",
      label: "Username",
      attributes: {
        name: "fullname",
        id: randomId,
        value: "",
        placeholder: "",
        validation: {
          required: false,
          disabled: false,
          minLength: 0,
          maxLength: Infinity,
          pattern: "",
        },
      },
    },
  },

  {
    id: 8,
    title: "Text Area",
    icon: <AiOutlineMessage color="#AAA" />,
    data: {
      type: "textarea",
      label: "please write your feedback",
      attributes: {
        name: "",
        id: randomId,
        value: "",
        rows: 2,
        cols: 20,
        placeholder: "",
        validation: {
          required: false,
          disabled: false,
          minLength: 0,
          maxLength: Infinity,
        },
      },
    },
  },

  {
    id: 9,
    title: "Submit Button",
    icon: <MdCheckCircle color="#AAA" />,
    data: {
      type: "button",
      label: "Button",
      attributes: {
        value: "Submit",
        onClick: "",
      },
    },
  },
];
