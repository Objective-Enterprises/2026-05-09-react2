import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ThreadCard from '../../../src/components/ThreadList/ThreadCard';

// Mocking VoteButtons
vi.mock('../Shared/VoteButtons', () => ({
  default: ({ count }) => (
    <div data-testid="vote-buttons">
      <span>{count}</span>
    </div>
  ),
}));

// Mocking userService
vi.mock('../../../src/services/userService', () => ({
  getUserName: vi.fn((id) => (id === 'author-123' ? 'TestAuthor' : 'Unknown')),
}));

describe('ThreadCard Component', () => {
  const mockThread = {
    _id: '123',
    title: 'Test Thread Title',
    content: 'This is the content of the test thread.',
    author: 'author-123',
    subredditName: 'technology',
    upvotedBy: ['user1', 'user2'], // 2 upvotes
    downvotedBy: ['user3'], // 1 downvote
    createdAt: new Date().toISOString(),
  };

  const mockOnSelect = vi.fn();

  it('renders thread details correctly', () => {
    render(<ThreadCard thread={mockThread} home={true} onSelect={mockOnSelect} />);

    expect(screen.getByText(mockThread.title)).toBeDefined();
    expect(screen.getByText('TestAuthor')).toBeDefined();
    expect(screen.getByText('r/technology')).toBeDefined();
  });

  it('calls onSelect with thread object when View Comments is clicked', () => {
    render(<ThreadCard thread={mockThread} home={true} onSelect={mockOnSelect} />);
    
    const viewCommentsBtn = screen.getByRole('button', { name: /View Comments/i });
    fireEvent.click(viewCommentsBtn);

    expect(mockOnSelect).toHaveBeenCalledWith(mockThread);
  });

  it('renders VoteButtons with correct calculated count', () => {
    render(<ThreadCard thread={mockThread} home={true} onSelect={mockOnSelect} />);
    
    // 2 upvotedBy - 1 downvotedBy = 1
    expect(screen.getByText('1')).toBeDefined();
  });
});
