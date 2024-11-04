"use client"
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const AddBlog = () => {
    const { toast } = useToast();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [description, setDescription] = useState('');

    const handlePost = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, summary, description }),
            });

            if (response.ok) {
                toast({
                    title: "Blog post created!",
                    description: "Your blog post was successfully added.",
                });
                setTitle('');
                setSummary('');
                setDescription('');
            } else {
                const errorData = await response.json();
                toast({
                    title: "Error",
                    description: errorData.message || "Something went wrong.",
                    
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to create the blog post. Please try again.",
                
            });
        }
    };

    return (
        <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
            <h2 className="text-2xl font-medium mb-4">Create a Blog Post</h2>
            <form onSubmit={handlePost}>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Summary</label>
                    <input
                        type="text"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                    ></textarea>
                </div>
                <div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;
