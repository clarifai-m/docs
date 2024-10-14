---
description: A Glossary of General AI Terms for Using the Clarifai Platform Effectively 
sidebar_position: 1
---

# General AI Glossary

**A Glossary of General AI Terms for Using the Clarifai Platform Effectively**
<hr />

## A

### A/B Testing

A statistical way of comparing two (or more) techniques, typically an incumbent against a new rival. It aims to determine which technique performs better, and whether the difference is statistically significant.

### Accuracy 

The fraction of correct predictions a model got right. The goal of any model is to get it to see the world as you see it.

- In Multi-class classification, accuracy is determined by the number of correct predictions divided by the total number of examples.
- In Binary classification, or for two mutually exclusive classes, accuracy is determined by the number of true positives added to the number of true negatives, divided by the total number of examples.

### Activation Function

In artificial neural networks, the activation function of a node defines the output of that node given an input or set of inputs.

### Active Learning

A machine learning term that refers to various methods for actively improving the performance of trained models.

### Adversarial Example

Adversarial examples are specialized inputs created with the purpose of confusing a neural network, resulting in the misclassification of a given input. These
notorious inputs are indistinguishable to the human eye, but cause the network to fail to identify the contents of the image.

### Adversarial Machine Learning

A research field that lies at the intersection of machine learning (ML) and computer security. It enables the safe adoption of ML techniques in adversarial settings like spam filtering, malware detection, etc.

### Agents

In the context of AI, agents are software that can independently perform specific tasks without human intervention. They often employ various tools, like calculators or web browsing, to process data and develop solutions.

### Agent System Operators

[Agent system operators](https://docs.clarifai.com/portal-guide/agent-system-operators/) are "non-trainable," or "fixed function," models that help you connect, route, and control the inputs and outputs that you send through your workflows. Operator models are critical building blocks for creating more advanced workflows.

:::note Operators Examples

-	**Concept Thresholder** allows you to threshold input concepts according to both a threshold and an operator (>, >=, =, \<=, or \<). For example, if you use the " > " threshold type and set the threshold value to 0.9, only concepts that have been predicted with a confidence score greater than 0.9 will be sent as outputs from the concept thresholder, and other concepts will be ignored. 
-	**Region Thresholder** allows you to threshold regions based on the concepts that they contain using a threshold per concept and an overall operator (>, >=, =, \<=, or \<). 
-	**Random Sampler** allows you to randomly allow an input to pass to the output.
-	**Image Cropper** allows you to crop the input image according to each input region that is present in the input.
-	**Image Align** allows you to align images using key points.
-	**Annotation Writer** allows you to write the input data to the database in the form of an annotation with a specified status as if a specific user created the annotation.
-	**Regex-Based Classifier** allows you to classify text using regular expressions. When the specified regex pattern matches the text, the text is assigned to one of the predefined concepts.
-	**Concept Synonym Mapper** allows you to map the input concepts to output concepts by following synonym concept relations in the knowledge graph of your app.

:::

### AI Algorithms

Extended subset of machine learning that tells the computer how to learn to operate on its own through a set of rules or instructions. 

### AI Ethics in Generative Models

With the advancement of generative AI, the urgency of addressing ethical concerns such as deepfakes, data privacy, and bias within AI has intensified. There are increasing calls for meticulous oversight to guarantee their responsible development and application.

### AI-Generated Art and Copyright

The rise of AI in generating art has led to discussions about copyright, ownership, and the definition of creativity.

### AI Lake

A centralized platform designed to consolidate, organize, and manage all your AI assets, including models, annotations, datasets, workflows, and user interfaces. It enables seamless collaboration between teams, fostering AI adoption and reusability across the enterprise. With AI-powered indexing, it automatically organizes massive amounts of data objects and makes them easily searchable. 

:::warning accelerate AI development

The platform supports dataset versioning and lineage tracking for all AI assets, ensuring control over access, modifications, and deletions. AI Lake aims to make AI applications reproducible by allowing users to recreate results using input data, code, and configurations. 

Built on enterprise-grade infrastructure with 99.999% uptime, it integrates seamlessly with major cloud providers like AWS, GCP, and Azure, as well as on-premises and air-gapped systems. AI Lake accelerates AI development by providing data scientists with the necessary tools to build accurate models without redundant efforts, promoting collaboration and making AI assets easily findable and reusable. Furthermore, AI Lake enhances AI governance by offering auditable and reproducible AI solutions with comprehensive provenance and change history tracking.

:::

### Anchor Box 

The archetypal location, size, and shape for finding bounding boxes in an object detection problem. For example, square anchor boxes are typically used in face detection models. 

### Annotation 

The "answer key" for each image. Annotations are markups placed on an image (bounding boxes for object detection, polygons or a segmentation map for segmentation) to teach the model the ground truth. 

### Annotation Format

The particular way of encoding an annotation. There are many ways to describe a bounding box's size and position (JSON, XML, TXT, etc) and to delineate which annotation goes with which image. 

### Annotation Group 

Describes what types of objects you are identifying. For example, "chess pieces" or "vehicles."

### API Key

[An API key](https://docs.clarifai.com/clarifai-basics/authentication/app-specific-api-keys) is essentially a “password” for accessing the API. Accounts are billed for API calls, and this helps us keep track of activity.

### Application

An application is literally what it sounds like: an application of AI to an existing challenge. It’s a self-contained project for storing and handling, data, annotations, models, concepts, datasets, workflows (chaining of models together), and searches.


:::warning self-contained project

An operation performed in one application will return results from data within that application, but will be blind to data in other applications. You can create as many applications as you like and can divide your use among them to segment data into collections and manage access accordingly. Usually, you would create a new application for each new set of related tasks you want to accomplish.

:::

### Application Programming Interface (API)

A set of commands, functions, protocols, and objects that programmers can use to create software or interact with an external system.

:::note

Clarifai’s API allows users to access the Clarifai platform through four request types:

- POST - Upload inputs and information
- PATCH - Update or modify existing information
- GET - Request information
- DELETE - Delete existing information

:::

### Application Template

Clarifai [app templates](https://docs.clarifai.com/clarifai-basics/app-templates) are pre-built blueprints that provide a starting point for creating your own applications. They are apps with their contents grouped by some use case — enabling you to easily get started building your applications.

### Architecture 

A specific neural network layout (layers, neurons, blocks, etc). These often come in multiple sizes whose design is similar except for the number of parameters. 

### Artificial General Intelligence 

Computational system that can perform any intellectual task a human can. Also called "Strong Al." At this point, AGI is fictional.

### Artificial Intelligence 

The simulation of human intelligence processes by machines, especially computer systems. These processes include learning (the acquisition of information and rules for using it), reasoning (using rules to reach approximate or definite conclusions), and self-correction.

### Artificial Neural Network

A learning model created to act like a human brain that solves tasks that are too difficult for traditional computer systems to solve.

### Artificial Super Intelligence 

Artificial Super Intelligence (ASI) refers to a level of AI that surpasses human intelligence across all domains, including creativity, problem-solving, and emotional intelligence.

### AUC Score

The AUC, or area under the ROC curve, is a metric used to measure the performance of a binary classifier, such as a spam filter or fraud detector. It’s a numerical value between 0 and 1 that represents the overall performance of the classifier and its degree of separability, where 1 means the classifier is perfect at distinguishing between two classes, and 0.5 means it’s no better than a coin flip.

### Audio Speech Recognition (ASR) 

A technology that processes human speech into readable text. 

:::warning Audio Transcription Models

These models take audio containing speech and convert it into text. These can be extremely useful as they allow audio to be searched for key terms, or AI models to transmit text instead of audio over networks, which is much smaller and faster.

:::

### Authentication

[Authentication](https://docs.clarifai.com/clarifai-basics/authentication/) is the process of verifying someone's claimed identity. It's essentially confirming that a user trying to access a system or resource is who they say they are.

:::warning Two-Factor Authentication

[Two-factor authentication](https://docs.clarifai.com/clarifai-basics/authentication/factor-authentication) (2FA) is an optional sign-in security feature that provides an additional layer of security to your account.

:::

### Authorization

[Authorization](https://docs.clarifai.com/clarifai-basics/authentication/authorize), following authentication, determines what a user is allowed to do with a system or resource  after their identity has been verified.  It's about granting specific permissions based on a user's role or privileges.

### Auto-Annotation

[Auto-annotation](https://docs.clarifai.com/portal-guide/workflows/common-workflows/auto-annotation-walkthrough/), also known as automatic annotation or automated labeling, refers to the use of machine learning and artificial intelligence techniques to automatically generate annotations or labels for data. 

### Automation Bias 

When a human decision maker favors recommendations made by an automated decision-making system over information made without automation, even when the automated decision-making system makes errors. 

### AutoML 

Automates each step of the ML workflow so that it’s easier for users with minimal effort and machine learning expertise.

### Autonomous AI

The most advanced form of AI is autonomous artificial intelligence, in which processes are automated to generate the intelligence that allows machines, bots and systems to act on their own, independent of human intervention. It is often used in autonomous vehicles.

## B

### Backpropagation 

The main algorithm used for performing gradient descent on neural networks. Short for "backward propagation of errors," it’s an algorithm for supervised learning of artificial neural networks using gradient descent. Given an artificial neural network and an error function, the method calculates the gradient of the error function with respect to the neural network weights.

### Backward Chaining 

A method where the model starts with the desired output and works in reverse to find data that might support it. 

### Base Workflow

One of Clarifai's pre-built workflows that can be built upon to create a custom model. It pre-indexes inputs for search and provides a default embedding space. 

:::warning default knowledge base

The [base workflow](https://docs.clarifai.com/portal-guide/workflows/base-workflows/) acts as the default knowledge base for your app and provides the basic structure for indexing your data. It gives you a "head start" when working with your data — by pre-indexing your inputs for search and by providing a default embedding for your custom models.

:::

### Baseline

A model used as a reference point for comparing how well another model (typically, a more complex one) is performing. Baseline models help developers quantify the minimal expected performance that a new model must achieve to be useful. 

### Batch

The set of examples used in one iteration (that is, one gradient update) of model training. 

### Batch Inference 

Asynchronous process that is executing predictions based on existing models and observations, and then stores the output.

### Batch Size

The number of training examples utilized in one iteration.

###  Bayes's Theorem

A famous theorem used by statisticians to describe the probability of an event based on prior knowledge of conditions that might be related to an occurrence.

###  Bias

When an Al algorithm produces results that are systemically prejudiced due to erroneous assumptions in the machine learning process.

:::caution Narrow training data

It occurs when the scope of your training data is *too narrow*. If you only see green apples, you’ll assume that all apples are green and think red apples are another kind of fruit. If the training data contains only a small number of examples, it’ll react accordingly, taking it as truth. Small datasets make for a smaller worldview.

:::

###  Big Data

Big data refers to data that is so large, fast or complex that it's difficult or impossible to
process using traditional methods.

###  Binary Classification/Mutually Exclusive

The task of classifying elements of a set into two groups on the basis of a classification
rule i.e. a model that evaluates email messages and outputs either spam or not spam is a binary classifier.

:::warning  Mutual Exclusivity

Mutual exclusivity means the outcomes are disjoint if they cannot both be true. When classes are referred to as “mutually exclusive,” this means that the neural network will only predict an input as a single concept, and no other classes or concepts. 

In this case, there is no intersection between any of the classes for a model. For instance, a network may classify an image as a cat or dog, but not both. If the goal of a model is to recognize only ONE concept for an input, making the concepts in your model mutually exclusive will give you stronger, more accurate predictions.

:::

###  Black Box Al

An Al system whose inputs and operations are not visible to the user. A black box, in a general sense, is an impenetrable system. 

### Boosting

A machine learning technique that iteratively combines a set of simple and not very accurate classifiers (referred to as "weak" classifiers) into a classifier with high accuracy (a "strong" classifier) by upweighting the examples that the model is currently misclassifying.

###  Bootstrapping

Bootstrapping is any test or metric that uses random sampling with replacement and falls under the broader class of resampling methods. Bootstrapping assigns measures of accuracy (bias, variance, confidence intervals, prediction error, etc.) to sample estimates.

###  Bounding Box

In an image, the (x, y) coordinates of a rectangle around an area of interest.

### Brute Force Search

A search that isn't limited by clustering/approximations; it searches across all inputs. Often more time-consuming and expensive, but more thorough.

### Bucketing 

Converting a feature into multiple binary features called buckets or bins, typically based on value range. For example, concepts can be moved into “bins” of outcomes, based on prediction return values.

### BYTE Tracker 

[BYTE Tracker](https://docs.clarifai.com/portal-guide/agent-system-operators/tracker#byte-tracker) is a multi-object tracking by-detection model built upon the Simple Online and Real-time Tracking (SORT) principles. Multi-object tracking aims to predict the bounding boxes and identities of objects within video sequences.

## C

### Calibration Layer

A post-prediction adjustment, typically to account for prediction bias. The adjusted predictions and probabilities should match the distribution of an observed set of labels.

### Centroid Tracker

[Centroid Tracker](https://docs.clarifai.com/portal-guide/agent-system-operators/tracker#centroid-tracker) is a tracking model that relies on the Euclidean distance between centroids of regions in different video frames to assign the same track ID to detections of the same object.

### Chatbot

Simulates human conversation, using response workflows or artificial intelligence to interact with people based on verbal and written cues. Chatbots have become increasingly sophisticated in recent years and in the future may be indistinguishable from humans.

### Chain-of-Thought Prompting

A technique used in AI language models to produce more reasoned, step-by-step outputs, especially in problem-solving tasks.

### Checkpoint

Data that captures the state of the variables of a model at a particular time. Checkpoints enable exporting model weights, performing training across multiple sessions and continuing training past errors.

### Class

One of a set of enumerated target values for a label. For example, in a binary classification 
model that detects spam, the two classes are spam and not spam. In a multi-class classification model that identifies dog breeds, the classes would be poodle, beagle, pug, etc.

### Class Balance

The relative distribution between the number of examples of each class used to train a model. A model performs better if there are a relatively even number of examples for each class.

### Classification

The process of grouping and categorizing objects and ideas recognized, differentiated, and understood in data.

:::warning Classification Models

These models read an input such as text, image, audio, or video data and generate an output that classifies it into a category. For example, a language classification model might read a sentence and determine whether it's in French, Spanish, or Italian.

:::

### Classification Threshold 

A value used to separate the positive class from the negative class of predictions.

### Classifier

A model that implements classification. It refers to the mathematical function implemented by a classification algorithm that maps input data to a category.

### Client Library

[A client library](https://docs.clarifai.com/api-guide/api-overview/api-clients/) is a pre-written set of code in a specific programming language that simplifies the process of interacting with our API. These libraries provide functions and methods that abstract away the complexities of making raw API requests, handling authentication, formatting data, and parsing responses, enabling developers to integrate with our API more easily and efficiently.

### Cluster

A group of observations that show similarities to each other and are organized by similarities.

### Clustering

A method of unsupervised learning and common statistical data analysis technique. In this method, observations that show similarities to each other are organized into groups (clusters).

### Cognitive Computing

A computerized model that mimics the way the human brain thinks. It involves self-learning through the use of data mining, natural language processing, and pattern recognition.

### Collaboration

[Collaboration](https://docs.clarifai.com/clarifai-basics/applications/collaboration) is a functionality that provides you with the ability to share your apps so that you can work with your team members to label data, create models, and more. This feature comes with full control of the permissions available in your apps, which allows you to manage the capabilities and information available to each user.


### Collector

[Collectors](https://docs.clarifai.com/portal-guide/data/collectors/) capture inputs used for making predictions in your app. They enable you to pipe in data from production models automatically, and are the key to unlocking many platform training capabilities like active learning.

### Commands 

The actions that enable a user to execute a task.

### Community

The Clarifai Community is a low-code, no-code platform that allows you to discover, build, and share AI models, workflows, and app components with confidence. It’s a modern portal that is built for the needs, challenges, and opportunities of today’s AI industry.

### Computer Vision

Field of AI that trains computers to interpret and understand the visual world. Using digital images from cameras and videos and deep learning models, machines can accurately identify and classify objects — and then react to what they “see.”

### Concept

A concept is something that describes an entity in the physical world, similar to a “tag” or “keyword.” Concepts are also known as "classes" in the field of machine learning.

You can use a concept to annotate an input if that input has that entity. You can also add it to a model if you want that model to be able to recognize that entity. The data in these concepts give the model something to “observe” about the keyword, and learn from.

### Confidence

A model is inherently statistical. Along with its prediction, it also outputs a confidence
value that quantifies how sure it is that its prediction is correct.

### Confidence Threshold

We often discard predictions that fall below a certain bar. This bar is the confidence threshold.

### Confusion Matrix

A confusion matrix is a table that is often used to describe the performance of a classification model on a set of test data for which the true values are known. The confusion matrix itself is relatively simple to understand, but the related terminology can be… confusing.

:::info

It’s a table that summarizes how successful a classification model's predictions were; that is, the correlation between the label and the model's classification. Concepts that co-occur, or are similar, may appear as clusters on the matrix. On the other hand, exclusive or dissimilar concepts should not form a cluster. 

:::

### Container

A virtualized environment that packages its dependencies together into a portable environment. Docker is one common way to create containers.

### Convolution

Convolution means spiral, or, mathematically, two functions that produce a third function, which can be a modification of one of the originals. It’s a type of block that helps a model learn information about relationships between nearby pixels.

In deep learning, this is the step that extracts features from the input image. This step allows our algorithm to take these features and plot them in a vector — effectively allowing it to “see” these features.

<p align="center">

![Convolution](/img/glossary_convolution.gif)

Source: Deep Learning Methods for Vision [[2](https://cs.nyu.edu/~fergus/tutorials/deep_learning_cvpr12/)]

</p>

### Convolutional Neural Network

Convolutional neural networks are deep artificial neural networks that are used primarily to classify images (e.g. name what they see), cluster them by similarity (photo search), and perform object recognition within scenes.

### CoreML

A proprietary format used to encode weights for Apple devices that takes advantage of
the hardware-accelerated neural engine present on iPhone and iPad devices.

### CreateML

A no-code training tool created by Apple that will train machine learning models and export them to CoreML. It supports classification and object detection along with several types of non computer-vision models (such as sound, activity, and text classification).

### Curse of Dimensionality

The curse of dimensionality refers to various phenomena that arise when analyzing and organizing data in high-dimensional spaces that do not occur in low-dimensional settings, such as the three-dimensional physical space of everyday experience.

### Custom Dataset

A set of images and annotations pertaining to a domain-specific problem. In contrast to a research benchmark dataset like Coco or Pascal Voe.

### Custom Training

This refers to the process of training a machine learning model on your own specific dataset to perform a particular task.  This is in contrast to using pre-trained models, which are already trained on generic datasets and can be fine-tuned for specific tasks.

## D

### Data

In the data science and AI world, data is any collection of information that is converted into a digital form. Data is plural, with the singular being “datum.”

:::tip

It’s important to distinguish between structured and unstructured data:

- Structured data is highly specific and is stored in a predefined format, such as a spreadsheet table;
- Unstructured data is a conglomeration of many varied types of data that are stored in their native formats, such as images, video, audio, and text. 

:::

###  Data Annotation

The process of labeling datasets to be used as inputs for machine learning models.

###  Data Curation

The process of collecting, organizing, cleaning, labeling, and maintaining data for use in training and testing models.

###  Data Mining

The process by which patterns are discovered within large sets of data with the goal of extracting useful information from it.

###  Dataset

A collection of data and ground truth of outputs that you use to train machine learning models by example. 

### De-Duplication 

The removal of identical data, or data that is so similar that for all intents and purposes it can be considered duplicate data. Using visual search, a similarity threshold can be set to decide what should be removed.

###  Deep Learning 

The general term for machine learning using layered (or deep) algorithms to learn patterns in data. It is most often used for supervised learning problems.

### Deep Neural Network 

An artificial neural network (ANN) with multiple layers between the input and output layers. It uses sophisticated mathematical modeling to process data in complex ways.

###  Deploy

Taking the results of a trained model and using them to make inferences on real-world data. This could mean hosting a model on a server or installing it on an edge device.

###  Detection 

Also known as object detection. It involves identifying the presence, location and type of objects within images or video frames.

:::warning Detection Models

Detection comprises two tasks; listing “what” things appear in an image, and “where” they appear. Results are returned as bounding boxes along with the names of the detected items.

:::

###  Diversity, Equity, and Inclusion (DEI)

A term used to describe policies and programs that promote the representation and participation of different groups of individuals, including people of different ages, races and ethnicities, abilities and disabilities, genders, religions, cultures, and sexual orientations.

###  Domain Adaptation

A type of transfer learning, domain adaptation is a technique to improve the performance of a model where there is little data in the target domain by using knowledge learned by another model in a related domain. An example could be training a model to recognize taxis using a model that recognizes cars.

### Domain Model 

Focuses on understanding a single domain, such as travel, weddings, food, not-safe-for-work (NSFW), etc.

## E

### Edge AI 

Data is processed on the same device that produces it, or at most, on a nearby computer. Edge AI means there’s no reliance on distant cloud servers or other remote computing nodes, allowing the AI to work faster, and respond more accurately to time-sensitive events.

### Edge Computing

A distributed computing framework that brings enterprise applications closer to data sources such as loT devices or local edge servers.

### Embeddings

A low-dimensional representation of a model’s input that has rich semantic information. It involves conversions of data to a feature representation where certain properties can be represented by notions of distance in a neural network. In other words, the translation of data to a continuous, fixed-length representation of something that is otherwise difficult to represent.

:::warning Embedding models

Computers and models can’t understand images and text like humans do. Embedding models take unstructured input like images, audio, text, and video and transform them
into a series of numbers called vectors which can then be input into the prediction models.

:::

### Embedding Space

The d-dimensional vector space that features from a higher-dimensional vector space are mapped to. Ideally, the embedding space contains a structure that yields meaningful mathematical results.

### Emotional AI

Emotional AI refers to technologies that use affective computing and artificial intelligence
techniques to sense, learn about and interact with human emotional life.

### Endpoint 

A task or end goal for a machine learning model. 

For example, we might get this question: 

**Question**: “Is X Endpoint doable in your models?” 

**Answer**: Reference Clarifai’s API documentation to review endpoints and determine if we can do something. Our explorer tool essentially translates our API prediction scripts.

### Ensemble Models

Ensemble models are a machine learning approach to combine multiple other models in the prediction process. While the individual models may not perform very well, when combined they can be very powerful indeed.

### Epoch

It refers to one complete pass through the entire training dataset. It's a fundamental unit of measurement that signifies how many times the training data has been exposed to the learning algorithm. 

### Evaluation

The process of assessing a model's performance on a specific task. It's essentially how you check how well your model learned from the training data and how well it can generalize to unseen data.

:::warning Evaluation Leaderboard

[Evaluation Leaderboard](https://docs.clarifai.com/portal-guide/evaluate/leaderboard) is a ranking system that compares the performance of your models based on their evaluation results. It’s a scoreboard that provides useful insights for the model versions in your apps and ranks them according to selected benchmark metrics.

:::


### Extensible Markup Language (XML)

A markup language and file format for storing, transmitting, and reconstructing arbitrary data. It defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.

## F

### F Score 

A weighted average of the true positive rate of recall and precision.
 
### Facial Recognition 

An application capability of identifying or verifying a person from an image or a video frame by comparing selected facial features from the image and a face database.

### False Negatives

An error where a model falsely predicts an input as not having a desired outcome, when one is actually present. (Actual Yes, Predicted No).

### False Positives

An error where a model falsely predicts the presence of the desired outcome in an input, when in reality it is not present (Actual No, Predicted Yes).

### Feature Extraction

The process of transforming raw data into a more usable format for machine learning algorithms. It involves identifying and extracting the most relevant pieces of information (features such as texture, shape, lines, and edges) from the data, while discarding irrelevant details. 

### Fine-Tuning

[Fine-tuning](https://docs.clarifai.com/portal-guide/model/deep-training/) is a deep learning technique that refers to taking a pre-trained model and further training it on a new dataset or task. The term "fine-tuning" implies making small adjustments or refinements to the already learned representations in the pre-trained model rather than training from scratch. It leverages the power of pre-trained models to improve their performance on a new, related task. It involves taking a pre-trained model, which was previously trained on a vast dataset for a general-purpose task, and tailoring it to a more specific task.

:::warning template types

You can take advantage of a variety of our pre-configured [templates](https://docs.clarifai.com/portal-guide/model/deep-training/#template-types) when developing your deep fine-tuned models. Templates give you the control to choose the specific architecture used by your neural network, and also define a set of hyperparameters that you can use to fine-tune the way your model learns. 
Examples include MMClassification_ResNet_50_RSB_A1 and Clarifai_InceptionBatchNorm for visual classification tasks, MMDetection_YoloF and MMDetection_SSD for visual detection tasks, and MMSegmentation_SegFormer for visual segmentation tasks. 

:::

### Folksonomy 

User-generated system of classifying and organizing online content into different categories by the use of metadata such as electronic tags. 

### Framework 

Deep learning frameworks implement neural network concepts. Some are designed for training and inference  —TensorFlow, PyTorch, FastAI, etc. And others are designed particularly for speedy inference — OpenVino, TensorRT, etc.

## G

### Generalization 

Refers to a model's ability to make correct predictions on new, previously unseen data as opposed to the data used to train the model. 

### Generative Adversarial Networks (GANs) 

A class of artificial intelligence algorithms used in unsupervised machine learning, implemented by a system of two neural networks contesting with each other in a zero-sum game framework. This technique can generate photographs that look at least superficially authentic to human observers, having many realistic characteristics (though in tests, people can tell the real ones from those generated in many cases).

### Generative AI 

Models that can be trained using existing content like text, audio files, or images to create new original content. 

### Graphics Processing Unit (GPU) 

A specialized electronic circuit designed to rapidly manipulate and alter memory to accelerate the creation of images in a frame buffer intended for output to a display device. GPUs are used in embedded systems, mobile phones, personal computers, and more. 

### Graphics Processing Unit (GPU) Memory

The amount of information your GPU can fit on it. A bigger GPU will be able to process more information in parallel which means it can support bigger models (or bigger batch sizes) without running out of memory. If you run out of GPU memory, it will crash your program.

### Green AI 

Efforts to make AI more energy-efficient and environmentally friendly are gaining momentum, with a focus on reducing the carbon footprint of training and running AI models. 

### Grid Search 

Grid search is a tuning technique that attempts to compute the optimal values of hyperparameters for training models by performing an exhaustive search through a subset of hyperparameters.

### Ground Truth 

The answer key for your dataset. This is how you judge how well your model is doing and calculate the loss function we use for gradient descent. It's also what we use to calculate our metrics.

:::warning important

Having a good ground truth is extremely important. Your model will learn to predict based on the ground truth you give it to replicate.

:::

### gRPC

[gRPC](https://docs.clarifai.com/api-guide/api-overview/api-clients/grpc-vs-http-channels/) (gRPC Remote Procedure Calls) is an open-source framework developed by Google that facilitates efficient and robust communication between services, typically in microservices architectures. It enables the definition and implementation of remote procedure calls (RPCs) with a focus on performance, scalability, and flexibility. gRPC leverages HTTP/2 for transport, Protocol Buffers (protobuf) for serialization, and supports multiple programming languages. We initially built our API on gRPC. 

## H

### Hashing 

In machine learning, a mechanism for bucketing categorical data, particularly when the number of categories is large, but the number of categories actually appearing in the dataset is comparatively small.

### Hidden Layer

A synthetic layer in a neural network between the input layer (that is, the features) and the output layer (the prediction). Hidden layers typically contain an activation function (such as ReLU) for training. A deep neural network contains more than one hidden layer. 

###  Holdout Data 

Examples intentionally not used during training. The validation dataset and test dataset are examples of holdout data. It helps evaluate your model's ability to generalize to data other than the data on which it was trained.

###  Hosted Model 

A set of trained weights located in the cloud that you can receive predictions from via an API. 

### Hugging Face

Hugging Face is a leading platform in the field of natural language processing (NLP) and machine learning, providing tools and resources that simplify the process of building, training, and deploying machine learning models. Its extensive libraries, pre-trained models, and collaborative ecosystem empower developers and researchers to advance their NLP projects efficiently and effectively.

###  Human Workforce 

Workers who can help to complete work on an as-needed basis, which for purposes usually means labeling data (images).

###  Hyperparameter 

The levers by which you can tune your model during training. These include things like learning rate and batch size. You can experiment with changing hyperparameters to see which ones perform best with a given model for your dataset.

## I

### Inference 

Making predictions using the weights you save after training your model. 

### lmageNet

A large visual database designed for use in visual object recognition software research. 

### Image Recognition 

The ability of software to identify objects, places, people, writing and actions in images. 

### Image Segmentation 

The process of dividing a digital image into multiple segments with the goal of simplifying the representation of an image into something that is easier to analyze. Segmentation divides whole images into pixel groupings, which can then be labeled and classified. 

### Image-to-Text

Image-to-text generation, also known as image captioning, refers to the process of generating textual descriptions or captions for images. It involves using a model to analyze the content of an image and then generate a coherent and relevant textual description that describes what is happening in the image — similar to how humans would describe it.

### Implicit Bias 

Automatically making an association or assumption based on one's mental models and memories. Implicit bias can affect how data is collected and classified, and how machine learning systems are designed and developed.

### Indexing

Indexing collects, parses, and stores your inputs to facilitate fast and accurate information retrieval. Indexing happens automatically every time you add new inputs to your app. Indexing enables responsive visual search, data clustering, concept search and model training.

### Information Retrieval 

The area of Computer Science studying the process of searching for information in a document, searching for documents themselves, and also searching for metadata that describes data and for databases of texts, images, or sounds.

### Input 

An input is the data you're providing into the Clarifai platform. Inputs and their predictions are indexed so that they can be used for search. You can also add your own concepts to inputs to use when training your own model. When you upload data to an app, that is known as "POSTing" inputs. 

### Input Layer 

The first layer (the one that receives the input data) in a neural network.

### Inputs-Manager

The Inputs-Manager page is the main page showcasing all the inputs in your app.

### Input-Viewer

The Input-Viewer page is the main page that showcases the details of a single input available in your app. If you click an input listed on the Input-Manager page, you'll be redirected to the viewer page for that input, where you can see its details.

### Intelligent Character Recognition (ICR) 

Related technology to OCR designed to recognize handwritten characters. 

### loT

The interconnection via the internet of computing devices embedded in everyday objects, enabling them to send and receive data.

## J 

### Jetson 

An edge computing device created by NVIDIA that includes an onboard GPU. 

### JSON 

A freeform data serialization format originally created as part of JavaScript but now used much more broadly. Many annotation formats use JSON to encode their bounding boxes.

### Jupyter Notebook

A common data science tool that enables you to execute Python code visually. Each "cell" in the notebook is a block of code that you can execute by hitting "Ctrl+Enter." The results of the execution are displayed below the cell.

## K 

### Knowledge Graph 

[A knowledge graph](https://docs.clarifai.com/api-guide/concepts/knowledge_graph) is not the kind of graph you may be used to showing the relationship between two variables. Rather, it’s a collection of nodes and edges where the nodes represent concepts, entities, relationships, and events, and the edges represent the connections between them.

## L

###  Label 

Assigning a class, category, or concept to a specific object in your dataset. 

### Labeler 

[Labeler](https://docs.clarifai.com/portal-guide/annotate/labeling-tools) tasks platform provides special tools for working with images, videos, and texts for classification, detection, and segmentation labeling tasks. With the tools, you can annotate your inputs faster and more conveniently.

### Labeling 

Labeling (also known as annotating) refers to the process of adding one or more relevant tags, or keywords — usually referred to as concepts — that best describe the state of your inputs.

:::warning AI-Assisted Labeling

[AI-assisted](https://docs.clarifai.com/portal-guide/annotate/ai-assist/) labeling is an innovative Clarifai feature that leverages artificial intelligence technology to assist and optimize the process of annotating data.

::: 

### Labeling Criteria

An essential guide to the labeling requirements for a project. It should include instructions for the labeling process itself as well as written definitions and a multitude of visual examples for each concept. These examples help the labelers anticipate the visual differences and edge cases that can occur within one single concept.

### Layers

The parts that make up the composition of a neural network.

### Learning Rate

Learning rate is a crucial hyperparameter that governs the step size the model takes when updating its internal parameters during training. It essentially controls how much the model adjusts its weights in response to the errors it makes on the training data.

:::warning Step Size

Step size refers to the amount by which the model parameters are adjusted during each iteration of the training process. A higher learning rate signifies a larger step size, and a lower learning rate corresponds to a smaller step size.

:::

### Logistic Regression 

A type of regression model that outputs a continuous value from a linear combination of input features. Unlike classification models, regression provides an answer to a question of *quantity*. 

:::info

- **Classification** is the task of predicting a discrete class label.

- **Regression** is the task of predicting a continuous quantity.

:::

### LOPQ 

**L**ocally **O**ptimized **P**roduct **Q**uantization is used to find the different embeddings for search, which we implement instead of the General model. This is a more bespoke approach to building Visual Search Models. 

### Loss Function 

Loss function (also known as a cost function or objective function) is a mathematical function that measures the difference between the predicted output of a model and the actual output (target value). The purpose of a loss function is to quantify how well or poorly a model's predictions match the true data, providing a way to guide the model's training process by giving feedback on its performance.

## M

### Machine Intelligence 

An umbrella term that encompasses machine learning, deep learning and classical learning algorithms.

### Machine Learning 

A general term for algorithms that can learn patterns from existing data and use these patterns to make predictions or decisions with new data.

### Masks

[Mask](https://docs.clarifai.com/portal-guide/annotate/label-types#masks) is a type of image segmentation that defines the exact boundaries of an object at a pixel level.

### Masked Language Model

A language model that predicts the probability of candidate tokens to fill in blanks in a sequence.

:::warning Masked Language Models

Language models that predict the probability of which words make the most sense to fill in blanks in a sequence. A simple example could be “Good _____, how are you?” where probable candidate words could be “morning,” “day,” or “evening.”

:::

### Metadata

Metadata are additional pieces of information you attach to your inputs when uploading them to the Clarifai platform. This can include product IDs, user IDs, or any other relevant details necessary for achieving specific business outcomes. Note that the metadata should be a valid JSON object.

For example, you can use metadata to quickly filter your data and combine it with other ranking criteria.

### Misclassification Rate 

Rate used to gauge how often a model’s predictions are wrong. 

### MLOps 

Also known as Machine Learning Operations. Best practices for organizations to operationalize machine learning. Often involves collaboration between data scientists and DevOps professionals to manage production ML.

### Modality 

A high-level data category. For example, numbers, text, images, video and audio are five different modalities. 

### Model 

Models convert inputs to outputs. They generate predictions based on the patterns extracted from the input data in concepts. Clarifai provides many different models that each ‘see’ the world differently — with a unique group of concepts. 

:::warning models

Clarifai has built some great models for you to use, but there are times when you wish you had a model that sees the world the way you see it — with your own concepts. You can use your own model by adding images with concepts, training it, and then specifying it when making predictions. 

:::

### ModelOps 

ModelOps is focused primarily on the governance and life cycle management of a wide range of operationalized artificial intelligence (AI) and decision models, including machine learning, knowledge graphs, rules, optimization, linguistic and agent-based models. 

### Model Size 

The number of parameters (or neurons) a model has and can be measured in terms of the size of the weights file on disk.

### Model Training 

Model training is the heart of machine learning. It's where a machine learning model learns to perform a specific task by being exposed to a large amount of data.

### Modules

[Modules](https://docs.clarifai.com/portal-guide/modules/) are custom plugins that provide both UI elements and the ability to perform some computation around our API. Modules enable you to extend the Clarifai UIs, augment backend processing capabilities, and build customized solutions quickly and easily.

### Multi-Class Classification 

Classification problems that distinguish between more than two classes. For example, there are approximately 53 species of maple trees, so a model that categorized maple tree species would be multi-class.

### Multimodal Model 

A model whose inputs and/or outputs include more than one modality. For example, consider a model that takes both an image and a text caption (two modalities) as features, and outputs a score indicating how appropriate the text caption is for the image.

## N

### Named Entity Recognition (NER)

A sub-task of information extraction that seeks to identify and classify named entities in text into predetermined categories, such as the names, locations, parts of speech, etc.

### Natural Language Processing (NLP) 

A branch of Al that helps computers understand, interpret, and manipulate human language. This field of study focuses on helping machines understand human language in order to improve human-computer interfaces.

### Natural Language Understanding 

Determining a user's intentions based on what the user typed or said. For example, a search engine uses natural language understanding to determine what the user is searching for based on what the user typed or said. 

### Neural Architecture Search 

Automatically trying many variations of model layouts and hyperparameters to find the optimal configuration. 

### Neural Network 

Series of algorithms that endeavor to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates. 

### Neuro-Symbolic 

The combining of neural and symbolic AI architectures to address complementary strengths and weaknesses of each, providing a robust AI capable of reasoning, learning, and cognitive modeling.

### Neuron 

A unit in an Artificial Neural Network processing multiple input values to generate a single output value. 

:::tip

In machine learning, the “neurons” are instead mathematical models that simulate transmitting information the way that neurons do in the human brain — instead of electrical and chemical signals, like we have in human brains, these artificial points take numbers in and spit numbers out.

:::

### Noise 

Signals with no causal relation to the target function. 

### Normalization 
The process of converting an actual range of values into a standard range of values, typically -1 to +1 or O to 1.


## O

### Object Detection 

A computer technology related to computer vision and image processing that deals with detecting instances of semantic objects of a certain class (such as humans, buildings, or cars) in digital images and videos. This technique also involves localizing the object in question, which differentiates it from classification, which only tells the type of object. 

### Object Recognition

Also known as object classification. A computer vision technique for identifying objects in images or videos.

### Object Tracking 

The process of following a specific object of interest, or multiple objects, in a given scene. It traditionally has applications in video and real-world interactions where observations are made following an initial object detection.

### On-Premise Software 

Software that is installed and runs on computers located on the premises of the organization using that software versus at a remote facility such as a server farm or on the cloud. 

### One-Shot Classification 

A model that only requires that you have one training example of each class you want to predict on. The model is still trained on several instances, but they only have to be in a domain similar to your training example. 

### Open Neural Network Exchange (ONNX)

ONNX is an open format that represents machine learning models. 

### OpenAI 

A U.S. AI research organization whose mission is to ensure that artificial general intelligence benefits all humanity. 

### Operation

An operation is an action that is performed via our API or User Interface. It can include actions such as predictions, searches, input uploads, training custom models, model evaluations and more.

### Optical Character Recognition (OCR)

A computer system that takes images of typed, handwritten, or printed text and converts them into machine-readable text.

### Optimization 

The selection of the best element (with regard to some criterion) from some set of available alternatives. 

### Organization

Clarifai Organizations is a feature within the Community platform that lets you consolidate multiple Clarifai accounts into an organization. It allows you to manage your company’s projects centrally, enhance collaboration within your team, and drive better results with your AI-powered software solutions.

### Output 

An output, usually in the form of a prediction or predictions, is the data returned to you when you send an input into a model. Because of their close relationship, the terms "outputs" and "predictions" are sometimes used interchangeably.

<p align="center">

![Inputs to outputs](/img/glossary_inputs_outputs.png)

</p>

### Outsourced Labeling

Paying people to annotate, or label, your data. Its effectiveness can depend on the domain expertise of annotators. Providing comprehensive labeling criteria is crucial for training annotators before beginning a project.

### Overfitting 

A machine learning problem where an algorithm is unable to discern information that is relevant to its assigned task from information which is irrelevant within training data. Overfitting inhibits the algorithm's predictive performance when dealing with new data, as it could recognize an unrelated feature as a positive aspect for a concept.

## P

### Parameter 

Any characteristic that can be used to help define or classify a system. In Al, they are used to clarify exactly what an algorithm should be seeking to identify as important data when performing its target function.

### Pattern Recognition 

A branch of machine learning that focuses on the recognition of patterns and regularities in data, although it is in some cases considered to be nearly synonymous with machine learning. 

### Personal Access Tokens

[A Personal Access Token](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens) (usually shortened as PAT) is a kind of key that authenticates a user across all applications they have access to. It's not linked to a specific application.

### Pipeline

The process of going from raw images to prediction. Usually this encompasses collecting images, annotation, data inspection and quality assurance, transformation, preprocessing and augmentation, training, evaluation, deployment, inference (and then repeating the cycle to improve the predictions). 

### Polygon 

A (usually non-rectangular) region defining an object with more detail than a rectangular bounding box. Polygon annotations can be used to train segmentation models or to enhance the performance of object-detection models by enabling a more accurate bounding box to be maintained after augmentation.

### Pooling 

It's also known as downsampling. It reduces the dimensionality of each feature map, but retains the most important information for that image. In the end, pooling makes it possible to recognize elements no matter where they are located. The goal of this step is to progressively reduce the spatial size of the input representation, making it more manageable to process. 

### Portal

Portal is a web application that allows you to interact with the Clarifai platform. You can view all the inputs you have added, perform searches, train new models, and more. 

### Positive Predictive Value (PPV)

Very similar to precision, except that it takes prevalence into account. In the case where the classes are perfectly balanced (meaning the prevalence is 50%), the positive predictive value is equivalent to precision. 

### Postman

[Postman](https://docs.clarifai.com/api-guide/api-overview/helpful-api-resources/using-postman-with-clarifai-apis) is a software tool that acts as an API platform for building and using APIs. With Postman, you can use, hit, or test the Clarifai API without the need to use the Portal or call the endpoints programmatically. Postman also allows you to make API calls and generate code snippets in your favorite programming language. 

### Precision 

Indicator of a machine learning model's performance – the quality of a positive prediction made by the model. Refers to the number of true positives divided by the total number of positive predictions. 

### Prediction 

An attempt by a model to replicate the ground truth. It’s an answer to the question: “What can you tell me about this input?” When you call predict on an input, you will receive one or more predictions of different concepts that apply to it. Predictions vary based on the concepts included in a given model. A prediction usually contains a confidence value for each class.

:::warning Predictive Model

A model that uses observations measured in a sample to gauge the probability that a different sample or remainder of the population will exhibit the same behavior or have the same outcome.

:::

### Pre-Trained Model 

A model, or the component of a model, that has been preliminary trained, generally using another data set; for example, finding lines, corners, and patterns of colors. Pre-training on a large dataset like the huge Common Objects in Context (COCO), which has 330,000 images with 1.5 million objects to detect, can reduce the number of custom images you need to obtain satisfactory results.

### Prevalence 

The rate of how often the “yes” condition actually occurs in a sample.

### Private

The term “private” refers to resources within the Clarifai platform that you own and are not available for everyone to access. They can be apps, models, workflows, or other resources that are only accessible to you or anyone within your team.

### Production 

The deployment environment where the model will run in the wild on real-world images (as opposed to the testing environment where the model is developed). 

### Prompt Engineering 

The practice of crafting effective prompts to elicit better outputs from language models has become an area of interest, especially with models like ChatGPT and DALL-E. 

### Proximal Policy Optimization (PPO)
 
PPO is a simplified and efficient reinforcement learning algorithm that refines policy functions to optimize performance in a given environment. It builds on TRPO's approach to ensuring stable policy updates but simplifies the process, making it more practical for implementation. 

### Pruning

The use of a search algorithm to cut off undesirable solutions to a problem in an Al system. It reduces the number of decisions that can be made by the Al system. 

### Public

The term “public” refers to resources within the Clarifai platform that are generally accessible to all users. They can be apps, models, workflows, or other resources that any user can interact with and integrate into their own use case.

### PyTorch 

A popular open-source deep learning framework developed by Facebook. It focuses on accelerating the path from research prototyping to production deployment.

## Q

### Quick Training 

A process that accelerates the training of machine learning models by utilizing advanced techniques and optimized architectures. It often involves transfer learning, where a pre-trained model is fine-tuned with a specific, smaller dataset, making the training more efficient and less resource-intensive.

## R

### RAG (Retrieval Augmented Generation) 

This combines a retrieval system with a generator to improve the factual accuracy of generated text. It retrieves relevant documents and uses them to inform the generation process.

### Rate Limit

[Rate limit](https://docs.clarifai.com/api-guide/api-overview/rate-limits) is a control mechanism we implement to manage the number of requests an individual user or application can make to our API within a specific period.

### Recall (Sensitivity) 

The fraction of relevant instances that have been retrieved over the total amount of relevant instances.

### Receiver Operating Characteristic (ROC) Curve 

This is a commonly used graph that summarizes the performance of classifiers over all possible thresholds. It is generated by plotting the True Positive Rate (y-axis) against the False Positive Rate (x-axis) as you vary the threshold for assigning observations to a given class.

### Recurrent Neural Network

A type of artificial network with loops in them, allowing recorded information, like data and outcomes, to persist by being passed from one step of the network to the next. They can be thought of as multiple copies of the same network with each passing information on to its successor. 

### Regression 

A statistical measure used to determine the strength of the relationships between dependent and independent variables.

### Reinforcement Learning

A type of machine learning in which machines are "taught" to achieve their target function through a process of experimentation and reward receiving positive reinforcement when its processes produce the desired result and negative reinforcement when they do not. This is differentiated from supervised learning, which would require an annotation for every individual action the algorithm would take.

### ReLU

In the context of artificial neural networks, the ReLU (rectified linear unit) activation function is an activation function that outputs the same as its input if the input is positive, and zero if the input is negative. A related function is the leaky rectified linear unit (leaky rectified linear unit), which assigns a small positive slope for x < 0. ( ͡° ͜ʖ ͡°) 

### Resource

A machine learning resource is any reusable component that provides functionality, data, or structure to facilitate the development, training, and deployment of machine learning models and applications. Examples include apps, models, workflows, datasets, and modules. 

### Responsible AI 

An umbrella term for aspects of making appropriate business and ethical choices when adopting AI, including business and societal value, risk, trust, transparency, fairness, bias mitigation, explainability, accountability, safety, privacy, and regulatory compliance.

### Review

The process of [reviewing](https://docs.clarifai.com/portal-guide/annotate/review) the work performed by your team of labelers for quality control purposes.

## S

### Scopes

[Scopes](https://docs.clarifai.com/clarifai-basics/authentication/scopes) provide control over the set of functionality and features available when using our API. Modifying scopes allows for fine-grained control over the data that users have access to, and can help keep your app secure from unauthorized intrusions.

### Scripts 

An aggregation of several commands that when executed together, perform specific actions.

### Search

All the inputs in your app are indexed by both the concepts applied by the app’s default base workflow, and by their own properties. Search, in the context of Clarifai, refers to finding relevant inputs in your app by text \(match concepts\), reverse image search \(similar-looking images\), or any other criteria.

:::tip Rank and Filter

- The rank feature in Clarifai's search functionality allows users to specify criteria for prioritizing search results based on relevance or similarity to a reference.

- The filter feature in Clarifai's search functionality allows users to narrow down search results based on specific criteria or conditions. Filters act as constraints that refine the set of results returned by a search query.

:::

:::warning Search Operations

- In Clarifai, the OR search operation provides users with a flexible means to retrieve search results that satisfy one or more specified criteria. By employing the OR filter, users can broaden their search scope to include items that meet any of the provided conditions.

- In Clarifai, the AND operation allows users to refine search results by specifying multiple criteria that must all be met simultaneously. For example, if a user searches for images containing both "dog" and "deer" concepts, only images that are labeled as both dogs and deers will be returned.

:::

### Search Query 

A query that a user feeds into a search engine to satisfy his or her information needs. If the query itself is a piece of visual content then that is what is known as a "visual search query." 

### Secure Data Hosting

[Secure Data Hosting](https://docs.clarifai.com/product-updates/upcoming-api-changes/secure-data-hosting) (SDH) is an extra layer of security and access control to the data we store on Amazon S3. It acts as an intermediary or middleman, allowing authorized users to access the content stored on Amazon S3. This lets us enhance the security of users’ data while leveraging the robust storage and infrastructure capabilities provided by Amazon S3.


### Segmentation

Segmentation is a type of labeling where each pixel in an input is labeled with given concepts, providing pixel-by-pixel details for a given object.  For example, image segmentation is considered more precise than other object detection methods because it labels individual pixels within an image.

### Segmentation Model 

Instead of bounding boxes returned for each concept, this model indicates via a heat map and trace (think coloring book) of regions for each concept.

### Selective Filtering 

When a model ignores "noise" to focus on valuable information.

### Siamese Networks 

A different way of classifying image where instead of training one model to learn to classify image inputs it trains two neural networks that learn simultaneously to find similarity between images. 

### Signal 

Inputs, information, data. 

### Software Development Kit (SDK) 

A set of software development tools that allows for the creation of applications on a specific platform. Example is the Clarifai's Python SDK. 

### Specificity 

The rate of how often a model predicts "no," when it's actually "no." 

### Standard Classification 

The process by which an input is assigned to one of a fixed set of categories. In machine learning, this is often achieved by learning a function that maps an input to a score for each potential category. 

### Starring

This refers to marking any resource — be it your own or publicly accessible in the Community — as a favorite. Simply click the star icon to designate any resource, including apps, models, datasets, workflows, and modules, as your favorite.

### Strong AI 

A theoretical form of AI that replicates human functions, such as reasoning, planning, and problem-solving.

### Structured Data 

Data that resides in a fixed field within a file or record. Structured data is typically stored in a relational database. It can consist of numbers and text, and sourcing can happen automatically or manually, as long as it's within an RDBMS structure. 

### Supervised Learning 

A machine learning approach that's defined by its use of labeled datasets. These datasets are designed to train or "supervise" algorithms into classifying data or predicting outcomes accurately. Using labeled inputs and outputs, the model can measure its accuracy and learn over time. 

### Symbiotic Intelligence 

A combination of human and artificial intelligence. Instead of relying on memory, or having to open a book, or visit a website, an enhanced human could have access to all of the information that is stored on the internet, and an advanced AI could feed the relevant data points to the human brain, enabling the human to be fully in control. 

### Synthetic Data 

Training data that is artificially generated rather than produced by real-world events.

### Synthetic Intelligence

Synthetic intelligence (SI) is an alternative term for artificial intelligence emphasizing that the intelligence of machines need not be an imitation or in any way artificial; it can be a genuine form of intelligence. An analogy can be made with simulated diamonds (such as cubic zirconia) versus synthetic diamonds (real diamonds made of carbon created by humans).

## T

### Target Function 

The end goal of an algorithm. 

### Task

[Task](https://docs.clarifai.com/portal-guide/annotate/create-a-task) is the work that needs to be done for labeling the inputs in an app. It's a powerful way to help your team annotate inputs fast and efficiently.

### Taxonomy

In essence, a taxonomy is a models worldview, or the framework for how your model sees its training data. In practice, it’s a list of visually-distinct model concepts and the definitions of those concepts. 

### Temporal Data 

Data recorded at different points in time. 

### TensorFlow 

A large-scale, distributed, machine learning platform that serves as a virtual “sandbox” for testing machine learning prediction parameters. It’s an open-source software library used for machine learning applications, such as neural networks.  

### Test Dataset 

The sample of data used to provide an unbiased evaluation of a final model fit on the training dataset.

### Torch 

A scientific computing framework with wide support for machine learning algorithms, written in C and Lua. 

### Train 

Training a model is the process of iteratively adjusting its parameters to converge on the weights that optimally mimic the training data. It’s when you teach a model to “learn” from all the annotated concepts on your inputs. 

### Training Dataset 

Training data is the initial dataset used to train machine learning algorithms. Models create and refine their rules using this data. It's a set of data samples used to fit the parameters of a machine learning model to train it by example. 

### Transfer Learning 

[Transferring information](https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning) from one machine learning task to another. It might involve transferring knowledge from the solution of a simpler task to a more complex one, or involve transferring knowledge from a task where there is more data to one where there is less data. 

### Transformer 

A neural network that transforms a sequence of elements (like words in a sentence) into another sequence to solve sequence-to-sequence tasks.

### True Negatives

Actual negatives that are correctly identified as such (Actual No, Predicted No). 

### True Positives 

Actual positives that are correctly identified as such (Actual Yes, Predicted Yes). 

### Trust Region Policy Optimization (TRPO) 

TRPO is a reinforcement learning technique that iteratively updates policy functions to enhance performance. It guarantees that each new policy is at least as good as the previous one, avoiding large updates that could degrade performance.

### Turing Test 

A test developed by Alan Turing in 1950, used to identify true artificial intelligence. It tested a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human.

## U

### Unstructured Data

Unstructured data is information that either does not have a predefined data model or is not organized in a predefined manner. Unstructured data may include documents, images, video and audio. 

### Unsupervised Learning 

Uses machine learning algorithms to analyze and cluster unlabeled datasets. These algorithms discover hidden patterns or data groupings without the need for human intervention. Its ability to discover similarities and differences in information makes it the ideal solution for exploratory data analysis, cross-selling strategies, customer segmentation, and image recognition.
`

### Usage Dashboard

[Usage dashboard](https://docs.clarifai.com/portal-guide/usage-dashboard) provides measurable insights into your utilization of the Clarifai Community platform during the selected period. With the dashboard, you can monitor your consumption of Clarifai’s resources, better understand how you interact with the Clarifai platform, and optimize your configurations accordingly.

## V 

### Validate 

The model is given new, previously unseen data, and then metrics are collected on how well it performs predictions on them. This is analogous to a human learning math problems using one set of questions, then tested to see if they learned properly with a different set of questions. 

### Validation Data Set 

The sample of data used to provide an unbiased evaluation of a model fit on the training dataset while tuning model hyperparameters. The evaluation becomes more biased as skill on the validation dataset is incorporated into the model configuration.

### Variance

The error due to sensitivity to fluctuations in the training set computed as the expectation of the squared deviation of a random variable from its mean.

### Vector Database

A vector database or a vector store is a specialized type of database designed to store, manage, and search high-dimensional vectors efficiently. These vectors typically represent data points such as images, text, audio, or other forms of data that have been transformed into numerical arrays by machine learning models. The primary purpose of a vector database is to facilitate rapid and accurate similarity searches, which are crucial for various machine learning tasks.

### Verify/Verification 

The process of verifying that labeled data has been labeled correctly in adherence to the ground truth. 

### Video Frame Interpolation

The process of synthesizing several frames of video, between two originally adjacent frames of video. 

### Visual Anomaly

[Visual anomaly](https://docs.clarifai.com/portal-guide/model/model-types/visual-anomaly) is a type of deep fine-tuned model that can be used to identify unusual or anomalous patterns in images and videos that differ from the expected norm.

### Visual Dictionary

A document that defines every model concept with a written definition and also a wide array of visual examples. This helps establish ground truth by providing confirmation that each involved party understands the model’s worldview, or taxonomy. 

### Visual Match

Instead of doing a search, which returns the items in the database in sorted order, a visual match couple be considered returning a yes/no answer of whether the query is close enough to any item in the database to be considered a “match.” 

### Visual Recognition 

The ability of software to identify objects, places, people, writing, and actions in images and videos.

### Visual Search

The ability of software to find visually similar content based on an image or video query.

## W 

### WeakAI 

Also known as narrow Al, weak Al refers to a non-sentient computer system that operates within a predetermined range of skills and usually focuses on a singular task or small set of tasks. Most Al in use today is weak Al. 

### Weight

A coefficient for a feature in a linear model, or an edge in a deep network. The goal of training a linear model is to determine the ideal weight for each feature. If a weight is 0, then its corresponding feature does not contribute to the model. 

### Width 

The number of neurons in a particular layer of a neural network.

### Workflows 

[Workflows](https://docs.clarifai.com/portal-guide/workflows/) is a useful Clarifai's feature that allows you to combine multiple models and carry out different operations. With workflows, you can create a powerful multimodal system that meets various use cases in a single API call — instead of relying only on one model.

### Wrapped Models

Wrapped models are those hosted externally, but we deploy them on our platform using their third-party API keys. 

:::warning Clarifai-hosted models

Clarifai-hosted models are the ones we host within our Clarifai Cloud. 

:::

## Y 

### YAML 

A markup language originally invented by Yahoo that is now commonly used as a format for configuration files.
