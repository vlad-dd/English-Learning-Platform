import 'intersection-observer';
import 'react-vertical-timeline-component/style.min.css';
import { render, screen } from "@testing-library/react";
import { useRenderTimelineWidget } from ".";

const timeline =
{
    id: "1",
    date: "dd/mm/yy",
    version: "0.0.1",
    isLastUpdate: true,
    title: "timeline-title",
    description: "timeline-description"
}

describe("useRenderTimelineWidget", () => {
    const { renderVerticalTimelineElements } = useRenderTimelineWidget();
    it("should render timeline element", () => {
        render(renderVerticalTimelineElements(timeline));
        expect(screen.getByText(timeline.date)).toBeInTheDocument();
        expect(screen.getByText(`Version: ${timeline.version}`)).toBeInTheDocument();
        expect(screen.getByText(timeline.title)).toBeInTheDocument();
        expect(screen.getByText(timeline.description)).toBeInTheDocument();
        expect(screen.getByText("Last Update")).toBeInTheDocument();
    });
});