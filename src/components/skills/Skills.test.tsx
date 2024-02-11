import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];
  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  //   rendering login button using getByRole
  test("renders Login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  //   not rendering button using queryByRole
  test("Start Learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  // findBy returns a promise which default value is 1000ms
  test("Start Learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 1000,
      }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
