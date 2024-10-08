import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";


import CodeAC from "!!raw-loader!../../../code_snippets/python-sdk/model_training/text_to_text/ac.py";
import CodeDU from "!!raw-loader!../../../code_snippets/python-sdk/model_training/text_to_text/du.py";
import CodeMT from "!!raw-loader!../../../code_snippets/python-sdk/model_training/text_to_text/mt.py";
import CodeMC from "!!raw-loader!../../../code_snippets/python-sdk/model_training/text_to_text/mc.py";
import CodeTS from "!!raw-loader!../../../code_snippets/python-sdk/model_training/text_to_text/ts.py";
import CodeS from "!!raw-loader!../../../code_snippets/python-sdk/model_training/text_to_text/s.py";
import CodeIMT from "!!raw-loader!../../../code_snippets/python-sdk/model_training/text_to_text/imt.py";
import CodeMP from "!!raw-loader!../../../code_snippets/python-sdk/model_training/text_to_text/mp.py";


import CodeOutputMT from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/text_to_text/mt.txt";
import CodeOutputTS from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/text_to_text/ts.txt";
import CodeOutputS from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/text_to_text/s.txt";
import CodeOutputMP from "!!raw-loader!../../../code_snippets/python-sdk/model_training/outputs/text_to_text/mp.txt";


# Text To Text

**Learn how to train a text-to-text model using Clarifai SDKs**
<hr />

Text-to-text models are a class of natural language processing (NLP) models designed to handle a wide range of text-based tasks using a unified architecture. Unlike traditional NLP models that are task-specific, text-to-text models are trained to map input text to output text, making them highly versatile and capable of performing various tasks such as translation, summarization, question answering, and text generation. You can learn more about Text-To-Text [here](https://docs.clarifai.com/portal-guide/model/model-types/text-to-text).


## App Creation

The first part of model training includes the creation of an app under which the training process takes place. Here we are creating an app with the app id as “demo_train” and the base workflow is set as “Universal”. You can change the base workflows to Empty, Universal, Language Understanding, and General according to your use case.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeAC}</CodeBlock>
</TabItem>
</Tabs>

## Dataset Upload

The next step involves dataset upload. You can upload the dataset to your app so that the model accepts the data directly from the platform. The  data used for training in this tutorial is available in the examples repository you have cloned.
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeDU}</CodeBlock>
</TabItem>
</Tabs>
If you have followed the steps correctly you should receive an output that looks like this,
<details>
  <summary>Output</summary>
    <img src="/img/python-sdk/tt_du.png" />
</details>



## Choose The Model Type

First let's list the all available trainable model types in the platform,
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeMT}</CodeBlock>
</TabItem>
</Tabs>
<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputMT}</CodeBlock>
</details>


Click [here](https://docs.clarifai.com/portal-guide/model/model-types/) to know more about Clarifai Model Types.


## Model Creation

From the above list of model types we are going to choose text-to-text as it is similar to our use case. Now let's create a model with the above model type.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeMC}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <img src="/img/python-sdk/tt_mc.png"  />
</details>

:::tip

[Click here](https://docs.clarifai.com/sdk/Model-Training-Tutorial/clusterer#patch-model) to learn how to patch your model. 

:::


## Template Selection

Inside the Clarifiai platform there is a template feature. Templates give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns. We are going to choose the `'HuggingFace_AdvancedConfig' `template for training our model.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeTS}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputTS}</CodeBlock>
</details>

## Setup Model Parameters

You can update the model params to your need before initiating training.

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeS}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputS}</CodeBlock>
</details>


## Initiate Model Training

We can initiate the model training by calling the model.train() method. The Clarifai SDKs also offers features like showing training status and saving training logs in a local file.

:::note
If the status code is 'MODEL-TRAINED', then the user can know the Model is Trained and ready to use.
:::

<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeIMT}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <img src="/img/python-sdk/tc_imt.png" />
</details>



## Model Prediction

Since the model is trained and ready let’s run some predictions to view the model performance,
<Tabs>
<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{CodeMP}</CodeBlock>
</TabItem>
</Tabs>

<details>
  <summary>Output</summary>
    <CodeBlock className="language-text">{CodeOutputMP}</CodeBlock>
</details>