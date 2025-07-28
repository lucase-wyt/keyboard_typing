import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 30px;
  height: 100%;
  overflow-y: auto;
`;

export const PageTitle = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
`;

export const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
  }

  &.primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }

  &.secondary {
    background: #6c757d;
    color: white;
  }

  &.danger {
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
    color: white;
  }

  &.success {
    background: linear-gradient(135deg, #26de81 0%, #20bf6b 100%);
    color: white;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const SearchBox = styled.input`
  padding: 12px 16px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  min-width: 300px;
  outline: none;

  &:focus {
    border-color: #667eea;
  }

  &::placeholder {
    color: #999;
  }
`;

export const LibraryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
`;

export const LibraryCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const LibraryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
`;

export const LibraryTitle = styled.h3`
  color: #333;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const LibraryMeta = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

export const MetaTag = styled.span`
  padding: 4px 12px;
  background: ${(props) => {
    switch (props.type) {
      case 'level':
        return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      case 'type':
        return 'linear-gradient(135deg, #26de81 0%, #20bf6b 100%)';
      case 'count':
        return 'linear-gradient(135deg, #ffa502 0%, #ff6348 100%)';
      default:
        return '#6c757d';
    }
  }};
  color: white;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
`;

export const LibraryDescription = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 15px;
`;

export const LibraryActions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

export const SmallButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  &.edit {
    background: #667eea;
    color: white;
  }

  &.delete {
    background: #ff6b6b;
    color: white;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 30px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
`;

export const ModalTitle = styled.h3`
  color: #333;
  font-size: 24px;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;

  &:hover {
    color: #333;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  color: #333;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #667eea;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: #667eea;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 12px;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  resize: vertical;

  &:focus {
    border-color: #667eea;
  }
`;

export const WordList = styled.div`
  max-height: 200px;
  overflow-y: auto;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  padding: 10px;
`;

export const WordItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
`;

export const PracticeCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

export const ControlPanel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 15px;
`;

export const LibrarySelect = styled.select`
  padding: 12px 16px;
  border: 2px solid rgba(102, 126, 234, 0.2);
  border-radius: 8px;
  background: white;
  font-size: 16px;
  min-width: 200px;
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: #667eea;
  }
`;

export const TextDisplay = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.8;
  font-family: 'Courier New', monospace;
  min-height: 200px;
  position: relative;
`;

export const TextContent = styled.div`
  white-space: pre-wrap;

  .correct {
    background-color: #d4edda;
    color: #155724;
  }

  .incorrect {
    background-color: #f8d7da;
    color: #721c24;
  }

  .current {
    background-color: #667eea;
    color: white;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%,
    50% {
      opacity: 1;
    }
    51%,
    100% {
      opacity: 0.3;
    }
  }
`;

export const InputArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 20px;
  border: 2px solid #dee2e6;
  border-radius: 12px;
  font-size: 16px;
  font-family: 'Courier New', monospace;
  resize: none;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #667eea;
  }
`;

export const StatsPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const StatCard = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
`;

export const StatValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const StatLabel = styled.div`
  font-size: 14px;
  opacity: 0.9;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

export const StatChange = styled.div`
  font-size: 14px;
  color: ${(props) => (props.positive ? '#26de81' : '#ff6b6b')};
  margin-top: 5px;
`;

export const ChartContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

export const ChartTitle = styled.h3`
  color: #333;
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 15px;
`;

export const RecordsTable = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 12px;
  background: #f8f9fa;
  border-bottom: 2px solid #dee2e6;
  text-align: left;
  font-weight: 600;
  color: #333;
`;

export const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #dee2e6;
  color: #666;
`;

export const TableRow = styled.tr`
  &:hover {
    background: #f8f9fa;
  }
`;

export const ProgressChart = styled.div`
  height: 200px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 10px;
  padding: 20px 0;
`;

export const ProgressBar = styled.div`
  flex: 1;
  background: linear-gradient(to top, #667eea, #764ba2);
  border-radius: 4px;
  min-height: 20px;
  height: ${(props) => props.height}%;
  position: relative;
  display: flex;
  align-items: end;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding-bottom: 5px;
`;

export const ChartLabel = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 12px;
  color: #666;
`;
