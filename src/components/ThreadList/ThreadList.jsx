import { Container } from 'react-bootstrap';
import './ThreadList.css';
import ThreadCard from './ThreadCard';

export default function ThreadList({ threads, onSelect }) {
  if (threads.length === 0) {
    return <div>No threads to display</div>;
  }

  const cards = threads.map((thread) => {
    return (
      <ThreadCard home onSelect={onSelect} thread={thread} key={thread._id} />
    );
  });

  return (
    <Container fluid className="px-0">
      {cards}
    </Container>
  );
}
