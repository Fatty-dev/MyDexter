export interface Message {
  id: number;
  content: string;
  sender: "incoming" | "outgoing";
  timestamp: string;
}
