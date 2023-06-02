# mobx

最新的mobx增加了使用hooks来使用仓库的方法


仓库的引用采用了useContext的方式，三个分支分别描述了三种mobx的使用方式

使用全局状态时：
- global_hook分支:使用useOberver()创建可观察组件
- gllobal_observer-component分支 :使用Observer组件创建可观察组件

使用局部状态：
- local-hook分支： useLocalObserver + useObserver创建局部状态管理


