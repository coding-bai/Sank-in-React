# 从HelloWord开始

## 为什么重读

> 因为本人最初学习react只是草草的略读文档，并没有深入的思考和了解，只是在当时完成业务和基本的使用，现在打算从0开始，细细品读react官方的各类文档。我们将更多思考为什么？

## React是什么？

React.js 不是一个框架，它只是一个库。它只提供 UI （view）层面的解决方案。在实际的项目当中，它并不能解决我们所有的问题，需要结合其它的库，例如 Redux、React-router 等来协助提供完整的解决方法。

## 第一行代码`HelloWorld`

```javascript
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

```javascript
ReactDOM.render(element, container[, callback])
 * element: 需要渲染在container的元素
 * container: 获取到的HTML容器，在这里是指id为root的容器，也就是public中html的div.id = 'root' 
 * callback: //TODO:这个回调函数会在每次render执行后执行，也就是被渲染和更新时,^_^这里就牵扯到react的生命周期了哦
```

这里是`React`的重点，我们看看`ReactDOM.render()`，这个看似平凡的函数恰好是React的关键，首先ReactDOM提供的是可在应用顶层使用的dom方法，**为什么这么设计？**，我们可能已经忘记了在React中是不允许直接插入HTML字符串的，我们先大胆猜测一波，是为了安全。

## JSX

> 首先必须要清楚的一点是JSX是完全拥有js的所有能力的

- 为什么用jsx?
  - JSX 可以很好地描述 UI 应该呈现出的它应有的交互的本质形式
  - React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合。也就是不应该让渲染的部分和各类事件以及绑定过分结合密切。
  - React 并没有采用将标记与逻辑进行分离到不同文件这种人为地分离方式，而是通过将二者共同存放在称之为“组件”的松散耦合单元之中，来实现关注点分离。
  - 还不懂？其实说白了无非就是React想要让渲染和逻辑处理各自的执行并不交叉

- Waring
  -至少在JSX中所使用以及呈现的所有属性都应该遵循小驼峰用法，**这里是为了防止和HTML的命名发生冲突**
- xss防范？
  -haha，可能有很多小伙伴没有注意到，在react中使用jsx是可以在一定程度上避免xss攻击的，主要原因就是**jsx会将所有的渲染内容转换为字符串，避免了并非你自己去注入的那些不明确的恶意代码**，这也是react为什么推荐你用jsx的原因之一。
- jsx怎么渲染出来？
  - 如果你考虑了这个问题，说明你很认真嘛！哈哈，这里就是大名鼎鼎的babel的功劳了，babel会进行预检查，怎么说呢，就是利用括号匹配的规则和拼接字符串变量的方法来实现HTML元素的生成(这里先大胆猜测一波)。
  - 这里涉及到了一个api，就是`React.createElement()`，这就是为什么你每个React的组件文件都要引入React这个库的原因。
  - 我们来看一下这个转化过程

```javascript
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
/**loading**/
//首先是Babel进行转化
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
/**loading**/
/*然后在经过预处理后也就是检测到你的Component的render方法或者你的函数式组件中的return后便会执行这一函数*/
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

看到这里，我们来看看`React.createElement()`这个api（始终牢记尤大的一句话：不会就看文档）：

```javascript
/*
这个函数执行完后会返回一个React元素，也就构成React页面的部分，你可以认为他是HTML页面
*/
React.createElement(
  type,
  [props],
  [...children]
)
```

## 组件

> 在这里React提出了**函数组件**和**class**组件两种方式，首先你肯定会有个问题，函数组件的话多方便，为什么要有class组件这个东西，其实这么说吧，首先因为`React.Component`是一个类，所以我们需要使用这其中的方法就要用到继承，得（dé）,这就是原因，facebook工程师在实现`React.Component`使用了类，所以说我们只要使用类中的方法都得使用类。

在上面的部分我们说到了我们在`Babel`和`React.createElement`的联手下都会将我们的`jsx`转化为React元素，也就是这一元素，使得React支持了我们最喜欢的自定义组件，毕竟只是传入的参数不一样罢了。这样你是否可以理解了呢。
比如我们自定义一个HelloWorld组件：

```javascript
ReactDOM.render(
 <HelloWorld />, 
  document.getElementById('root')
)
```

补充：(render过程)

```javascript
// React.createElement 中实例化一个 helloWorld
const helloWorld = new HelloWorld(props, children)
// React.createElement 中调用 helloWorld.render 方法渲染组件的内容
const helloWorldJsxObject = helloWorld.render()

// ReactDOM 用渲染后的 JavaScript 对象来来构建真正的 DOM 元素
const helloWorldDOM = createDOMFromObject(helloWorldJsxObject)
// ReactDOM 把 DOM 元素塞到页面上
document.getElementById('root').appendChild(helloWorldDOM)
```

> 其实现在你所理解的，正是我们日后在React更加深入甚至阅读源码的一些基础思想

## Props(看起来像HTML属性（Attributes）)

> 存放在JSX这个国家档案局的国家文件

在你将你所需要传递给子组件的属性(这里的属性包含值)或者组件传递给子组件时，在通过上面所讲述的转化后**将Props作为属性挂载在你的return或者render返回的组件上**，而上面的转化过程就类似于快递运输的过程。

**Warning**:props是国家文件，你只是负责文件的接收和使用，并没有修改的权限哦！

### 状态提升

当某个状态被多个组件依赖或者影响的时候，就把该状态提升到这些组件的最近公共父组件中去管理，用 props 传递数据或者函数来管理这种依赖或着影响的行为。这就是状态提升的思想，但是在现实中我们更多的使用redux和context去解决这类问题。

---
今天就看这点东西，作为前端开发，一定要牢记那句话，“不会就看文档，还不会就多看几遍”