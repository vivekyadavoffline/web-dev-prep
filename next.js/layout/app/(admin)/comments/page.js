"use client";
import React, { useState } from "react";

const Comments = () => {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const handleAddComment = (e) => {
    e.preventDefault();

    if (comment.trim() === "") return;

    setCommentsList([...commentsList, comment]);
    setComment("");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white shadow-md rounded-xl">
      
      <h2 className="text-xl font-bold mb-4">Comments</h2>

      {/* Input */}
      <form onSubmit={handleAddComment} className="flex gap-2 mb-4">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700"
        >
          Post
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-2">
        {commentsList.length === 0 ? (
          <p className="text-gray-500 text-sm">No comments yet</p>
        ) : (
          commentsList.map((c, index) => (
            <div
              key={index}
              className="bg-gray-100 px-3 py-2 rounded-lg"
            >
              {c}
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default Comments;