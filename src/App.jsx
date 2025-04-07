import { useEffect, useState } from "react";
import "./index.css";
import {
  Download,
  ExternalLink,
  Github,
  MessageCircle,
  Send,
  X,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

const prompt = `Vaisant K

Address: 10, F1, Surabhi Homes, Mahadevan Street, Chromepet, Chennai-600044
Phone: 7448418735
Mail ID: vaisant_k@me.iitr.ac.in

EDUCATION
IIT Roorkee, Roorkee, Uttarakhand [2022- Present]
B.Tech, Mechanical Engineering, CGPA: 7.09/10.00

KV Minambakkam, Minambakkam, Tamil Nadu [2019-2021]
XII PCM, CBSE ,Percentage in board exam: 95.60%

SRDF Vivekananda Vidyalaya, Chromepet, Tamil Nadu [2019]
X, CBSE ,Percentage in board exam: 93.50%


AREA OF INTEREST
Deep learning, Machine learning, Gen AI, Computer Vision

HOBBIES
Badminton,Sketching,Origami,Listening to music

SKILLS
• Computer Languages: Python, C++
• Computer Skills: Git, Pandas, Numpy, Scikit-learn, Tensorflow, PyTorch, OpenCV, Matplotlib, Docker
• Additional Courses: Google Advanced Data Analytics Course
• Language Skills: English (SRW), Hindi (SRW), Tamil (SRW)


PROJECTS

Low Light Image Enhancement | VLG, IIT Roorkee [May 2024 – June 2024]
• Implemented Zero Reference DCE Net, a deep convolutional neural network for low light image enhancement
• Successfully achieved image enhancement using, resulting in a Peak Signal-to-Noise Ratio (PSNR) of 28.07 dB

Notionated Task Manager | DSG, IIT Roorkee [August 2024 – September 2024]
• Developed a productivity-focused task management application aimed at helping students with time management
• Built a RAG pipeline using Gemini AI and Pathway to analyze and answer queries based on Notion timetable
• Designed an interactive, user-friendly UI with Streamlit for efficient task management, boosting user engagement
• Leveraged Docker for containerization and hosting of the application, ensuring scalability and easy deployment.

Physics Integrated Neural Networks | Paac, IIT Roorkee [August 2024 – December 2024]
• Developed a Physics-Informed Neural Network (PINN) using PyTorch to efficiently solve the 1D wave equation
• Showcased PINN’s superior accuracy in compared to NN by achieving a MSE for NN: 0.01026 and PINN: 0.00984

Equipment Failure Prediction using Machine Learning in SAE, IIT Roorkee
[Nov 2024 to Jan 2025]
Created a predictive model using machine learning techniques to forecast equipment failure based on sensor data and relevant parameters. Selected appropriate machine learning algorithms tailored to the dataset and prediction requirements. Designed a predictive model to handle large datasets efficiently in real-time or batch processing.

ACHIEVEMENTS

Represented IIT Roorkee in the Inter IIT Cultural Meet 6.0 in IIT Kharagpur held on December 2023 and Won Silver medal in Costume Designing event.

Represented IIT Roorkee in the Inter IIT Cultural Meet 7.0 in IIT Patna held on December 2024 and Won Bronze medal in Costume Designing event.

POSITIONS

Deputy Cell Secretary ( JEE Cell ), NSS IITR [Aug 2023 to Apr 2024]
Managed a team of 12 members and successfully lead a mentorship program for JEE Aspirants. Mentored JEE Aspirants from all over the country. Successfully organized and conducted JEE mock tests online. Planned and built a feedback system to collect feedback from students across the country.

Joint Secretary, Fine Arts , IITR [May 2024 to Present]
Active member of Fine Arts since September 2023 , lead many art projects and events to promote art. Contributed towards a wall painting for Thomso 2023 and JB Bhawan Day. Successfully managed and organized Darpan 2024 with a contribution of 3 2D artworks and monitored the installation of 3 3D artworks. Contributed and helped organize Art4Pride online competition.

You are a chatbot, assisting and answering questions based on the resume details provided of Vaisant K. You need to answer everything in a polite and witty manner.`;
function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sent: false, content: "Hi! How can i help you learn more about Vaisant and his resume?" },
  ]);
  const [message, setMessage] = useState("");
  const [generating, setGenerating] = useState(false);

  // useEffect(() => {
  //   async function trainModel() {
  //     const res = await ai.models.generateContent({
  //       model: "gemini-2.0-flash",
  //       contents: prompt,
  //     });
  //   }
  //   }, [])

  async function sendMessage() {
    if (message.length != 0) {
      // let oldmessages = messages;
      setMessages((oldMessages) => [
        ...oldMessages,
        { sent: true, content: message },
      ]);
      setGenerating(true);
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: ` 
    ${message}
    
    ${prompt}
    `,
      });
      // console.log(response.text);
      // oldmessages = messages;
      setMessage("");
      setGenerating(false);
      setMessages((oldMessages) => [
        ...oldMessages,
        { sent: false, content: response.text },
      ]);
    }
  }

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header className="container mx-auto p-4 flex justify-between items-center">
          <a href="/" className="font-semibold text-lg">
            Portfolio
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-sm hover:text-gray-600">
              About
            </a>
            <a href="#skills" className="text-sm hover:text-gray-600">
              Skills
            </a>
            <a href="#projects" className="text-sm hover:text-gray-600">
              Projects
            </a>
            <a href="#resume" className="text-sm hover:text-gray-600">
              Resume
            </a>
            <a href="#contact" className="text-sm hover:text-gray-600">
              Contact
            </a>
          </nav>
        </header>

        <main className="flex-1">
          <section
            id="about"
            className="container mx-auto py-12 md:py-20 flex flex-col md:flex-row items-center justify-center"
          >
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-2">Hi, I'm Vaisant</h1>
              <p className="text-xl text-gray-600 mb-4">
                Student at IIT Roorkee
              </p>
              <p className="text-gray-600 mb-6 max-w-md">
                Passionate about designing data science and machine learning
                models to build scalable solutions. Currently focusing on the AI
                and machine learning applications and automated decision making
                processes.
              </p>
              <p className="text-gray-600 mb-6 max-w-md">
                If you want to know more about me, you can have a chat with {' '}
                   <button
                      onClick={toggleChat}
                      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
                    >
                      My Chatbot
                    </button>
              </p>
              <div className="flex space-x-4">
              <a href="/Vaisant_Resume.pdf" download>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </a>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="rounded-full overflow-hidden w-64 h-64 border-4 border-white shadow-lg">
                <img
                  src="/pp.jpg"
                  alt="pp"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </section>

          <section
            id="skills"
            className="container mx-auto px-4 py-12 md:py-20"
          >
            <h2 className="text-2xl font-bold mb-10 text-center">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <div className="bg-purple-100 p-3 rounded-lg mb-4">
                  <div className="text-purple-600 w-8 h-8">
                  <img
                    src="/python.png" 
                    alt="Python Logo"
                    className="w-8 h-8 object-contain"     
                   />
                  </div>
                </div>
                <h3 className="font-semibold mb-1">Python</h3>
                <p className="text-xs text-gray-500 text-center">
                  ML and DL libraries
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <div className="bg-purple-100 p-3 rounded-lg mb-4">
                  <div className="text-purple-600 w-8 h-8">
                  <img
                    src="/js.png" 
                    alt="js Logo"
                    className="w-8 h-8 object-contain"     
                   />
                  </div>
                </div>
                <h3 className="font-semibold mb-1">Javascript</h3>
                <p className="text-xs text-gray-500 text-center">
                  React, Node.js & server-side frameworks
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <div className="bg-purple-100 p-3 rounded-lg mb-4">
                  <div className="text-purple-600 w-8 h-8">
                    <img
                    src="/html.png" 
                    alt="html Logo"
                    className="w-8 h-8 object-contain"     
                    />
                  </div>
                </div>
                <h3 className="font-semibold mb-1">HTML/CSS</h3>
                <p className="text-xs text-gray-500 text-center">
                  Frontend for web development
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <div className="bg-purple-100 p-3 rounded-lg mb-4">
                  <div className="text-purple-600 w-8 h-8">
                  <img
                    src="/c.svg" 
                    alt="c++ Logo"
                    className="w-8 h-8 object-contain"     
                   />
                  </div>
                </div>
                <h3 className="font-semibold mb-1">C++</h3>
                <p className="text-xs text-gray-500 text-center">
                  Object-oriented programming, data structures, and algorithm
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <div className="bg-purple-100 p-3 rounded-lg mb-4">
                  <div className="text-purple-600 w-8 h-8">
                  <img
                    src="/pytorch.svg" 
                    alt="Pytorch Logo"
                    className="w-8 h-8 object-contain"     
                   />
                  </div>
                </div>
                <h3 className="font-semibold mb-1">Tensorflow/PyTorch</h3>
                <p className="text-xs text-gray-500 text-center">
                  Devlopment and training of DL models
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <div className="bg-purple-100 p-3 rounded-lg mb-4">
                  <div className="text-purple-600 w-8 h-8">
                  <img
                    src="/github.svg" 
                    alt="github Logo"
                    className="w-8 h-8 object-contain"     
                   />
                  </div>
                </div>
                <h3 className="font-semibold mb-1">Git</h3>
                <p className="text-xs text-gray-500 text-center">
                Version control and collaborative code management.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <div className="bg-purple-100 p-3 rounded-lg mb-4">
                  <div className="text-purple-600 w-8 h-8">
                  <img
                    src="/opencv.svg" 
                    alt="opencv Logo"
                    className="w-8 h-8 object-contain"     
                   />
                  </div>
                </div>
                <h3 className="font-semibold mb-1">OpenCV</h3>
                <p className="text-xs text-gray-500 text-center">
                  CV tasks and image processing
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                <div className="bg-purple-100 p-3 rounded-lg mb-4">
                  <div className="text-purple-600 w-8 h-8">
                  <img
                    src="/np.svg" 
                    alt="np Logo"
                    className="w-8 h-8 object-contain"     
                   />
                  </div>
                </div>
                <h3 className="font-semibold mb-1">Pandas/NumPy</h3>
                <p className="text-xs text-gray-500 text-center">
                  Data manipulation, analysis
                </p>
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="container mx-auto px-4 py-12 md:py-20 bg-gray-50"
          >
            <h2 className="text-2xl font-bold mb-10 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/imgd.png"
                    alt="AI Image Recognition Project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    Low Light Image Enhancement
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    A deep learning model that can identify objects in images
                    with high accuracy using PyTorch and CNN architecture.
                    Successfully achieved image enhancement using, resulting in
                    a Peak Signal-to-Noise Ratio (PSNR) of 28.07 dB
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      PyTorch
                    </span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      CNN
                    </span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      Computer Vision
                    </span>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/ntm.png"
                    alt="Data Visualization Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    Notionated Task Manager
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Developed a productivity-focused task management app for
                    students with a RAG pipeline using Gemini AI and Pathway, an
                    interactive Streamlit UI, and Docker for scalable
                    deployment.{" "}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      RAG
                    </span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      Docker
                    </span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      Gen AI
                    </span>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img
                    src="pinn.png"
                    alt="NLP Sentiment Analysis"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    Physics Integrated Neural Networks
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Developed a Physics-Informed Neural Network (PINN) with
                    PyTorch to solve the 1D wave equation, achieving superior
                    accuracy with a lower MSE (PINN: 0.00984 vs. NN: 0.01026).
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      Neural Networks
                    </span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      PyTorch
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="resume"
            className="bg-purple-600 text-white py-12 md:py-20"
          >
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl font-bold mb-6">My Resume</h2>
              <p className="max-w-2xl mx-auto mb-8">
                Driven by curiosity and a passion for technology, I love
                creating impactful solutions that blend code with
                creativity.Here is my resume.
              </p>
              <a href="/Vaisant_Resume.pdf" download>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </a>
            </div>
          </section>

          <section
            id="contact"
            className="container mx-auto px-4 py-12 md:py-20"
          >
            <h2 className="text-2xl font-bold mb-10 text-center">
              Get in Touch
            </h2>
            <div className="flex justify-center space-x-12">
              <a
                href="https://www.linkedin.com/in/vaisant-kamarajan-a60991280/"
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 mb-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-blue-600"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/USER-VKpy-4616"
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 mb-2">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                  </svg>
                </div>
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="mailto:vaisant_k@me.iitr.ac.in"
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 mb-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-red-500"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <span className="text-sm">Email</span>
              </a>
            </div>
          </section>

          <div className="fixed bottom-6 right-6 z-50">
            {!isChatOpen ? (
              <Button
                onClick={toggleChat}
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105"
                aria-label="Open chat"
              >
                <MessageCircle className="h-6 w-6" />
              </Button>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-4 w-80 border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white mr-2">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    <span className="font-medium">Vaisant's Bot</span>
                  </div>
                  <div
                    onClick={toggleChat}
                    className="cursor-pointer w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white mr-2"
                  >
                    <X className="h-5 w-5" />
                  </div>
                </div>
                <div className="h-48 overflow-y-auto mb-4 bg-gray-50 p-3 rounded-md">
                  {messages.map((message, index) => {
                    return (
                      <div
                        key={index}
                        className={`flex mb-2 ${
                          message.sent ? "justify-end" : ""
                        }`}
                      >
                        <div
                          className={`${
                            message.sent
                              ? "bg-purple-600 text-white rounded-lg py-2 px-3 max-w-[80%]"
                              : "bg-purple-100 text-gray-800 rounded-lg py-2 px-3 max-w-[80%]"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                        </div>
                      </div>
                    );
                  })}

                  {generating ? (
                    <div className="text-sm text-center">
                      Please wait while we process...
                    </div>
                  ) : null}
                </div>
                <div className="flex">
                  <input
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-600"
                  />
                  <Button
                    onClick={sendMessage}
                    className="bg-purple-600 text-white px-3 py-2 rounded-r-md"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </main>

        <footer className="container mx-auto p-4 text-center text-sm text-gray-500">
          <p>© 2024 Vaisant K. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
