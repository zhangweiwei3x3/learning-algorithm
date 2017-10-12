import Graph from './Graph';

/**
 * 1、编写一个程序，测试广度优先和深度优先这两种图搜索算法哪一种速度更快。请使用不同大小的图来测试你的程序。
 */
var g = new Graph();

g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(0, 4);
g.display();
g.dfs(0);
g.clearMarked();
g.bfs(0);


/**
 * 4、构建一个图，用它为你居住地的地图建模。测试一下从一个开始顶点到最后顶点的最短路径。
 */
// 广度优先搜索
var g4 = new Graph();

g4.addEdge(0, 1);
g4.addEdge(0, 2);
g4.addEdge(0, 4);
g4.addEdge(1, 3);
g4.addEdge(2, 4);
g4.display();
g4.bfs(0);
g4.pathTo(0, 4);


/**
 * 5、对上一题中创建的图执行深度优先搜索和广度优先搜索。
 */
// 深度优先搜索
Graph.prototype.dfsMinHelper = function (v, end, path = [v]) {
    if (v == null) {
        return;
    }
    this.marked[v] = true;

    path.push(v);
    this.adj[v].forEach((w) => {
        if (!this.marked[w]) {
            if (v === end) {
                return path;
            }

            this.dfsMinHelper(w, end, path);
        }
    });

    return path;
};
Graph.prototype.dfsMin = function (v, end) {
    var path = [];

    this.adj[v].forEach((w) => {
        this.clearMarked();
        this.marked[v] = true;
        let tempPath = this.dfsMinHelper(w, end, [v]);

        if (tempPath[tempPath.length - 1] === end) {
            path.push(tempPath);
        }
    });
    console.log('全部路径：' + path);

    let letMinPath;

    // 最短路径
    path.forEach((p) => {
        if (!letMinPath) {
            letMinPath = p;
        } else if (letMinPath.length > p.length) {
            letMinPath = p;
        }
    });

    return letMinPath;
};

// 测试
var g5 = new Graph();

g5.addEdge(0, 4);
g5.addEdge(0, 1);
g5.addEdge(0, 2);
g5.addEdge(1, 3);
g5.addEdge(2, 4);
g5.display();
g5.dfsMin(0, 4);

// 广度优先搜索
Graph.prototype.bfsMin = function (v, end) {
    var path = [];

    this.adj[v].forEach((w) => {
        this.clearMarked();
        this.clearEdgeTo();
        this.marked[v] = true;
        this.bfs(w, end, [v]);
        let tempPath = this.pathTo(w, end);

        if (tempPath) {
            path.push([v].concat(tempPath));
        }
    });
    console.log('全部路径：' + path);

    let letMinPath;

    // 最短路径
    path.forEach((p) => {
        if (!letMinPath) {
            letMinPath = p;
        } else if (letMinPath.length > p.length) {
            letMinPath = p;
        }
    });

    return letMinPath;
};

// 测试
var g52 = new Graph();

g52.addEdge(0, 4);
g52.addEdge(0, 1);
g52.addEdge(0, 2);
g52.addEdge(1, 3);
g52.addEdge(2, 4);
g52.display();
g52.bfsMin(0, 4);
