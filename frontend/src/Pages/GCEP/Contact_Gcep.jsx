// import React, { useState } from "react";

// const Contact_Gcep = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     institute: "",
//     designation: "",
//     email: "",
//     phone: "",
//     jobTitle: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Data:", formData);

//     // Reset form
//     setFormData({
//       firstName: "",
//       lastName: "",
//       institute: "",
//       designation: "",
//       email: "",
//       phone: "",
//       jobTitle: "",
//       message: "",
//     });
//   };

//   return (
//     // <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f8f8] px-4 py-10 md:px-10">
//     //   {/* Heading */}
//     //   <div className="text-center mb-8">
//     //     <h1 className="text-3xl md:text-5xl font-semibold">
//     //       Connect or <span className="text-orange-500">Contact</span>
//     //     </h1>
//     //     <p className="text-lg md:text-2xl mt-2">
//     //       Complete the form below and proceed with steps to our partnership
//     //     </p>
//     //   </div>

//     //   {/* Form Container */}
//     //   <div className="bg-white shadow-lg rounded-xl w-full max-w-3xl p-6 sm:p-8">
//     //     <form className="space-y-6" onSubmit={handleSubmit}>
//     //       {/* Name Row */}
//     //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//     //         <div>
//     //           <label className="block text-base md:text-lg mb-1">
//     //             Name <span className="text-red-500">*</span>
//     //           </label>
//     //           <input
//     //             type="text"
//     //             name="firstName"
//     //             value={formData.firstName}
//     //             onChange={handleChange}
//     //             placeholder="Enter First Name"
//     //             className="w-full border border-gray-300 rounded-md p-2"
//     //           />
//     //           <p className="text-xs mt-1 text-gray-500">(First Name)</p>
//     //         </div>
//     //         <div>
//     //           <label className="block text-base md:text-lg mb-1 invisible">.</label>
//     //           <input
//     //             type="text"
//     //             name="lastName"
//     //             value={formData.lastName}
//     //             onChange={handleChange}
//     //             placeholder="Enter Last Name"
//     //             className="w-full border border-gray-300 rounded-md p-2"
//     //           />
//     //           <p className="text-xs mt-1 text-gray-500">(Last Name)</p>
//     //         </div>
//     //       </div>

//     //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//     //         <div>
//     //           <label className="block text-base md:text-lg mb-1">
//     //             Institute <span className="text-red-500">*</span>
//     //           </label>
//     //           <input
//     //             type="text"
//     //             name="institute"
//     //             value={formData.institute}
//     //             onChange={handleChange}
//     //             placeholder="Enter Institute Name"
//     //             className="w-full border border-gray-300 rounded-md p-2"
//     //           />
//     //         </div>
//     //         <div>
//     //           <label className="block text-base md:text-lg mb-1">
//     //             Designation (if agency)
//     //           </label>
//     //           <input
//     //             type="text"
//     //             name="designation"
//     //             value={formData.designation}
//     //             onChange={handleChange}
//     //             placeholder="Enter Designation"
//     //             className="w-full border border-gray-300 rounded-md p-2"
//     //           />
//     //         </div>
//     //       </div>

//     //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//     //         <div>
//     //           <label className="block text-base md:text-lg mb-1">
//     //             Email <span className="text-red-500">*</span>
//     //           </label>
//     //           <input
//     //             type="email"
//     //             name="email"
//     //             value={formData.email}
//     //             onChange={handleChange}
//     //             placeholder="Enter Email"
//     //             className="w-full border border-gray-300 rounded-md p-2"
//     //           />
//     //         </div>
//     //         <div>
//     //           <label className="block text-base md:text-lg mb-1">Phone</label>
//     //           <input
//     //             type="tel"
//     //             name="phone"
//     //             value={formData.phone}
//     //             onChange={handleChange}
//     //             placeholder="Enter Phone Number"
//     //             className="w-full border border-gray-300 rounded-md p-2"
//     //           />
//     //         </div>
//     //       </div>

//     //       <div>
//     //         <label className="block text-base md:text-lg mb-1">Job Title</label>
//     //         <input
//     //           type="text"
//     //           name="jobTitle"
//     //           value={formData.jobTitle}
//     //           onChange={handleChange}
//     //           placeholder="Enter Job Title"
//     //           className="w-full border border-gray-300 rounded-md p-2"
//     //         />
//     //       </div>

//     //       <div>
//     //         <label className="block text-base md:text-lg mb-1">Write a message..</label>
//     //         <textarea
//     //           name="message"
//     //           value={formData.message}
//     //           onChange={handleChange}
//     //           rows="3"
//     //           className="w-full border border-gray-300 rounded-md p-2"
//     //           placeholder="Write your message..."
//     //         ></textarea>
//     //       </div>

//     //       <div className="text-center md:text-left">
//     //         <button
//     //           type="submit"
//     //           className="bg-orange-500 text-white text-base md:text-lg px-6 py-2 rounded-md hover:bg-orange-600 transition"
//     //         >
//     //           Submit
//     //         </button>
//     //       </div>
//     //     </form>
//     //   </div>
//     // </div>

//     <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f8f8] px-4 py-10 md:px-10 font-['Poppins']">
//       {/* Heading */}
//       <div className="text-center mb-8">
//         <h1 className="text-3xl md:text-5xl font-semibold">
//           Connect or <span className="text-orange-500">Contact</span>
//         </h1>
//         <p className="text-lg md:text-2xl mt-2">
//           Complete the form below and proceed with steps to our partnership
//         </p>
//       </div>

//       {/* Form Container */}
//       <div className="bg-white shadow-lg rounded-xl w-full max-w-3xl p-4 sm:p-6 md:p-8">
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           {/* Name Row */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-base md:text-lg mb-1">
//                 First Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 placeholder="Enter First Name"
//                 className="w-full border border-gray-300 rounded-md p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-base md:text-lg mb-1">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 placeholder="Enter Last Name"
//                 className="w-full border border-gray-300 rounded-md p-2"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-base md:text-lg mb-1">
//                 Institute <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="institute"
//                 value={formData.institute}
//                 onChange={handleChange}
//                 placeholder="Enter Institute Name"
//                 className="w-full border border-gray-300 rounded-md p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-base md:text-lg mb-1">
//                 Designation (if agency)
//               </label>
//               <input
//                 type="text"
//                 name="designation"
//                 value={formData.designation}
//                 onChange={handleChange}
//                 placeholder="Enter Designation"
//                 className="w-full border border-gray-300 rounded-md p-2"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-base md:text-lg mb-1">
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter Email"
//                 className="w-full border border-gray-300 rounded-md p-2"
//               />
//             </div>
//             <div>
//               <label className="block text-base md:text-lg mb-1">Phone</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Enter Phone Number"
//                 className="w-full border border-gray-300 rounded-md p-2"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-base md:text-lg mb-1">Job Title</label>
//             <input
//               type="text"
//               name="jobTitle"
//               value={formData.jobTitle}
//               onChange={handleChange}
//               placeholder="Enter Job Title"
//               className="w-full border border-gray-300 rounded-md p-2"
//             />
//           </div>

//           <div>
//             <label className="block text-base md:text-lg mb-1">
//               Write a message..
//             </label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="3"
//               className="w-full border border-gray-300 rounded-md p-2"
//               placeholder="Write your message..."
//             ></textarea>
//           </div>

//           <div className="text-center md:text-left">
//             <button
//               type="submit"
//               className="bg-orange-500 text-white text-base md:text-lg px-6 py-2 rounded-md hover:bg-orange-600 transition"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact_Gcep;















import React, { useState } from "react";
import { API_ENDPOINTS } from "../../config/api";

const Contact_Gcep = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    institute: "",
    designation: "",
    email: "",
    phone: "",
    job_title: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting form with data:", formData); 

    try {
      const response = await fetch(
        API_ENDPOINTS.GCEP_CONTACT_SUBMIT,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      console.log("Server response:", result); // 👈 log the server response

      if (response.ok) {
        alert(result.message);
        setFormData({
          first_name: "",
          last_name: "",
          institute: "",
          designation: "",
          email: "",
          phone: "",
          job_title: "",
          message: "",
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Submission error:", error); // 👈 log fetch error
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f8f8] px-4 py-10 md:px-10 font-['Poppins']">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Connect or <span className="text-orange-500">Contact</span>
        </h1>
        <p className="text-lg md:text-2xl mt-2">
          Complete the form below and proceed with steps to our partnership
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-white shadow-lg rounded-xl w-full max-w-3xl p-4 sm:p-6 md:p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-base md:text-lg mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="Enter First Name"
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block text-base md:text-lg mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Enter Last Name"
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-base md:text-lg mb-1">
                Institute <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="institute"
                value={formData.institute}
                onChange={handleChange}
                placeholder="Enter Institute Name"
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block text-base md:text-lg mb-1">
                Designation (if agency)
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Enter Designation"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-base md:text-lg mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div>
              <label className="block text-base md:text-lg mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Phone Number"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-base md:text-lg mb-1">Job Title</label>
            <input
              type="text"
              name="job_title"
              value={formData.job_title}
              onChange={handleChange}
              placeholder="Enter Job Title"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-base md:text-lg mb-1">
              Write a message.. <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <div className="text-center md:text-left">
            <button
              type="submit"
              className="bg-orange-500 text-white text-base md:text-lg px-6 py-2 rounded-md hover:bg-orange-600 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact_Gcep;