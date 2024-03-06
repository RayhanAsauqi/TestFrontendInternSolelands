export interface InputProps {
  type: string;
  placeholder?: string | undefined;
  value?: string;
  names?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
