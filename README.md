# **Trainee Frontend Developer Test**

### 1. **General Description**

Create a multi-step quiz that dynamically loads questions from Contentful CMS and integrates with Algolia for results processing. The user should be able to complete the quiz step by step and receive results at the end.

### 2. **Technical Requirements**

### 2.1. **Contentful Integration**

- Use the Contentful API to fetch quiz questions and answer choices.
- Content structure in Contentful:
  - **Question**:
    - ID (unique identifier)
    - Question text
    - Question type (e.g., multiple choice, open-ended, scale, etc.)
    - Possible answers (if applicable)
  - **Step**:
    - ID
    - List of questions for the step
    - Question order.

### 2.2. **Multi-Step Quiz**

- The quiz should consist of multiple steps, and each step may contain one or more questions.
- The number of steps and questions per step should be dynamically configurable through Contentful.
- Support various question types:
  - Multiple choice
  - Open-ended questions
- Display user progress in the quiz (e.g., using a progress bar or step indicator).

### 2.3. **User Interface**

- Frontend (using a framework like React, Vite):
  - Each page should be a component representing a quiz step.
  - Forms with different input fields depending on the question type.
  - Validation of answers before proceeding to the next step.
  - Buttons for "Next," "Previous," and "Submit."
  - A results screen displayed at the end of the quiz.

### 2.5. **Quiz Results**

- Once the quiz is completed, the system should provide results:
  - Process and evaluate the user’s answers.
  - Display results with analysis (e.g., percentage of correct answers).
  - Results could be shown as text, graphics, or charts.

### 3. **Functional Requirements**

- **User Interface**:
  - Mobile responsive.
  - Show progress of the quiz.
  - Display results with an analysis screen after the quiz ends.

### 4. **Deployment and Hosting**

- The system should be deployed on a server (e.g., AWS, Heroku, or any other cloud provider).
- The web app should be accessible via web browsers with optimization for mobile devices.

### 5. **Additional Requirements**

- Loom video with func
- Performance optimization, especially in terms of Algolia search and Contentful data loading.
# snowy-quiz
# snowy-quiz
# snowy-quiz
