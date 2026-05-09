import { Container } from "react-bootstrap";
import './ThreadList.css';
import ThreadCard from "./ThreadCard";

export default function ThreadList({
  threads,
  onSelect
}) {
  const cards = threads.map((thread) => {
    return (
      <ThreadCard
        home
        thread={thread}
        key={thread._id}
      />
    )
  });

  return (
    <Container fluid className="px-0">
      {cards}
    </Container>
  );
}
