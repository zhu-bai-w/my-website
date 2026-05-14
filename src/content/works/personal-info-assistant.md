---
title: 个人信息助手系统
slug: personal-info-assistant
summary: 用 RSS、n8n、OpenAI 和飞书搭建的个人信息处理与日报推送系统。
type: AI 工具
role: 系统搭建者
date: 2026
status: 持续迭代
tools:
  - ChatGPT
  - OpenAI API
  - n8n
  - RSS
  - 飞书
  - Docker
tags:
  - AI 工作流
  - 自动化
  - 信息管理
  - n8n
cover: /images/placeholders/ai-tool.svg
featured: true
template: ai-tool
order: 3
---

# 项目目标

个人信息助手系统的目标是把零散的信息输入源整理成可读、可归档、可复盘的每日信息流。

## 使用场景

我希望它能帮助我持续追踪 AI、游戏设计、工具链和创作相关内容，并减少手动筛选和复制整理的时间。

## 工具栈

当前链路主要由 RSS、n8n、OpenAI API、飞书和 Docker 组成。后续可根据稳定性加入更多数据源和规则。

## 工作流结构

RSS 负责收集信息，n8n 负责任务编排，OpenAI 负责摘要、分类和结构化，飞书负责承接结果与长期归档。

### 核心链路

RSS 信息源 -> n8n -> OpenAI 摘要分类 -> 飞书日报推送

## 核心节点

- 信息抓取节点：读取订阅源并去重。
- 摘要分类节点：把文章压缩成可扫读的结构。
- 推送节点：将结果写入飞书文档或群机器人消息。

## 实现效果

第一版已经形成可解释的流程结构，后续重点是稳定性、分类准确率和归档字段设计。

## 遇到的问题

RSS 源稳定性、接口限制、摘要质量和重复信息处理是当前最需要优化的部分。

## 后续优化

计划加入更明确的标签体系、失败重试机制和周报汇总。
