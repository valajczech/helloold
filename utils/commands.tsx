import { ICommand } from "./interfaces";
import resume from "../public/assets/resume.pdf";

const commands: Array<ICommand> = [
  {
    name: "help",
    description: "I have a feeling that you know what this does.",
    output: <span>Hell</span>,
  },
  {
    name: "projects",
    description: "See my latest works",
    output: <span>Hello</span>,
  },
  {
    name: "cv",
    description: "Download or view my cv [pdf/21KB]",
    flags: [
      {
        name: "Download",
        short: "-d",
        description: "Downloads the cv",
      },
      {
        name: "View",
        short: "-v",
        description: "Opens the cv in new window",
      },
    ],
    func: (command: string) => {
      if (command?.length > 0) {
        switch (command[1]) {
          case "-v":
            window.open(resume, "_blank");
            break;
          case "-d":
            var link = document.createElement("a");
            link.href = resume;
            link.download = "resume.pdf";
            link.dispatchEvent(new MouseEvent("click"));
            break;
          default:
            window.open(resume, "_blank");
            break;
        }
      } else {
        window.open(resume, "_blank");
      }
    },
  },
];

export default commands;
