---
description: Learn how to use the Clarifai Python SDK
sidebar_position: 4
---

#  SDK Notebook Examples

**Learn how to use the Clarifai Python SDK**
<hr />

Here are comprehensive step-by-step walkthroughs within Jupyter or Colab notebooks that showcase how to harness the power of the Clarifai Python SDK.

|Notebook              | Colab  |Description                |
|----------------------|--|---------------------------|
| [Basics](https://github.com/Clarifai/examples/blob/main/basics/basics.ipynb) | [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/basics/basics.ipynb) | App and dataset lifecycle: creation, interaction, and deletion    |
| [Input Upload](https://github.com/Clarifai/examples/blob/main/datasets/upload/input_upload.ipynb)<br />[Dataset Upload](https://github.com/Clarifai/examples/blob/main/datasets/upload/dataset_upload.ipynb) | [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/datasets/upload/input_upload.ipynb)<br />[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/datasets/upload/dataset_upload.ipynb) | Illustrates how to upload datasets into a Clarifai app using features from `Dataset`   |
| [Vector Search](https://github.com/Clarifai/examples/blob/main/search/cross_modal_search.ipynb) | [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/search/cross_modal_search.ipynb) | How to do vector search over your own data |
| [Create Workflows](https://github.com/Clarifai/examples/blob/main/workflows/create_workflow.ipynb) <br />[Export workflows](https://github.com/Clarifai/examples/blob/main/workflows/export_workflow.ipynb) | [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/workflows/create_workflow.ipynb)<br />[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/workflows/export_workflow.ipynb) | Learn how to create workflows <br /> Learn how to export workflows    |
| [Models Predict](https://github.com/Clarifai/examples/blob/main/models/model_predict.ipynb) | [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/models/model_predict.ipynb) | Learn how to get predictions with text, image, video, and audio inputs with any model (e.g. LLMs) |
| [Image Classification Training](https://github.com/Clarifai/examples/blob/main/models/model_train/image-classification_training.ipynb) <br /> [Text Classification Training](https://github.com/Clarifai/examples/blob/main/models/model_train/text-classification_training.ipynb)<br /> [Image Detection Training](https://github.com/Clarifai/examples/blob/main/models/model_train/image-detection_training.ipynb) <br /> [Image Segmentation Training](https://github.com/Clarifai/examples/blob/main/models/model_train/image-segmentation_training.ipynb) <br /> [Transfer Learn Training](https://github.com/Clarifai/examples/blob/main/models/model_train/transfer-learn.ipynb) | [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/models/model_train/image-classification_training.ipynb) <br />[![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/models/model_train/text-classification_training.ipynb) <br /> [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/models/model_train/image-detection_training.ipynb) <br /> [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/models/model_train/image-segmentation_training.ipynb) <br /> [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/models/model_train/transfer-learn.ipynb) | Model training and finetuning for different model types.


#  Integrations Examples
| Integration | Function    | Notebook    | Open in Colab |
| ----------- | ----------- | ----------- | -----------   |
| [Langchain](https://python.langchain.com/docs/get_started/introduction)   | Chains      | [Prompt Templates and Chains](https://github.com/Clarifai/examples/blob/main/Integrations/Langchain/Chains/Prompt-templates_and_chains.ipynb) | [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/Integrations/Langchain/Chains/Prompt-templates_and_chains.ipynb) |
|             |             | [Retrieval QA Chain](https://github.com/Clarifai/examples/blob/main/Integrations/Langchain/Chains/Retrieval_QA_chain_with_Clarifai_Vectorstore.ipynb) | [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/Integrations/Langchain/Chains/Retrieval_QA_chain_with_Clarifai_Vectorstore.ipynb) |
|             |             | [Router Chain](https://github.com/Clarifai/examples/blob/main/Integrations/Langchain/Chains/Router_chain_examples_with_Clarifai_SDK.ipynb) | [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/Integrations/Langchain/Chains/Router_chain_examples_with_Clarifai_SDK.ipynb) |
|             | Agents       | [Conversational Agent](https://github.com/Clarifai/examples/blob/main/Integrations/Langchain/Agents/Retrieval_QA_with_Conversation_memory.ipynb) | [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/Integrations/Langchain/Agents/Retrieval_QA_with_Conversation_memory.ipynb) |
|             |             | [ReAct Docstore Agent](https://github.com/Clarifai/examples/blob/main/Integrations/Langchain/Agents/Doc-retrieve_using_Langchain-ReAct_Agent.ipynb) | [![Open in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Clarifai/examples/blob/main/Integrations/Langchain/Agents/Doc-retrieve_using_Langchain-ReAct_Agent.ipynb) |