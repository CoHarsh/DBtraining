import React from "react";
import "./App.css";

// Navbar Component
const Navbar = () => {
  return (
    <div className="w-full shadow-md bg-gray-800 text-white py-4 text-left px-16">
      <h1 className="text-2xl font-bold">Photo Gallery</h1>
    </div>
  );
};

// AddPhoto Component
const AddPhoto = ({ setPhotos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const files = e.target.elements.files.files;
    const description = e.target.elements.description.value;

    if (files.length > 0) {
      const newPhotos = Array.from(files).map((file) => ({
        img: URL.createObjectURL(file),
        name: file.name,
        description: description || "No description", // Default description
      }));
      setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
    }
    e.target.reset(); // Reset form after submission
  };

  return (
    <form className="w-full py-4 flex flex-col px-2" onSubmit={handleSubmit}>
      <div className="grid grid-cols-10">
        <p className="text-md col-span-2 text-left">Upload Image</p>
        <input type="file" name="files" multiple className="mb-4 col-span-7" />
      </div>
      <div className="grid grid-cols-10">
        <p className="text-md col-span-2 text-left ">Description</p>
        <textarea
          name="description"
          rows="3"
          placeholder="Write a description about the image here..."
          className="border border-gray-300 rounded p-2 mb-4 w-full max-w-md col-span-7"
        />
      </div>
      <div className="flex ">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Add Photo
        </button>
      </div>
    </form>
  );
};

// Photos Component
const Photos = ({ photos, setPhotos }) => {
  const [editIndex, setEditIndex] = React.useState(null);
  const [newDescription, setNewDescription] = React.useState("");

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewDescription(photos[index].description);
  };

  const handleSave = (index) => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo, i) =>
        i === index ? { ...photo, description: newDescription } : photo
      )
    );
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
  };

  return (
    <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-6 p-4">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="relative border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white"
        >
          <img
            src={photo.img}
            alt={photo.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            {editIndex === index ? (
              <div>
                <textarea
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="border border-gray-300 rounded p-2 mb-4 w-full"
                />
                <button
                  onClick={() => handleSave(index)}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  Save
                </button>
              </div>
            ) : (
              <div>
                <p className="text-gray-700">{photo.description}</p>
                <button
                  onClick={() => handleEdit(index)}
                  className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="mt-2 ml-2 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

// App Component
function App() {
  const [photos, setPhotos] = React.useState([]);

  return (
    <div className="App font-sans">
      <Navbar />
      <div className="px-4 sm:px-8 lg:px-16">
        <AddPhoto setPhotos={setPhotos} />
        <div className="border-2 border-opacity-0.2 w-full h-1"></div>
        <Photos photos={photos} setPhotos={setPhotos} />
      </div>
    </div>
  );
}

export default App;
