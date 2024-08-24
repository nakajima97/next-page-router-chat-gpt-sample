export type Role = 'user' | 'assistant';

export type Chat = {
	id: string;
	role: Role;
	content: string;
};

export type ChatHistory = Chat[];
