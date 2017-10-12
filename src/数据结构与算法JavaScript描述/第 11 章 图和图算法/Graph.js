/**
 * 图
 */

function Graph() {
    // 存储 顶点之间的关系
    this.adj = {};

    // 边的个数
    this.edges = 0;

    // 存储已访问过的顶点
    this.marked = {};

    // 路径 bfs 中使用
    this.edgeTo = {};
}

// 新增边
Graph.prototype.addEdge = function (v, w) {
    this.adj[v] = this.adj[v] || [];
    this.adj[v].push(w);

    this.adj[w] = this.adj[w] || [];
    this.adj[w].push(v);

    this.edges++;
};

// 清除 marked
Graph.prototype.clearMarked = function () {
    this.marked = {};
};

// 清除 edgeTo
Graph.prototype.clearEdgeTo = function () {
    this.edgeTo = {};
};

// 深度优先搜索
Graph.prototype.dfs = function (v) {
    if (v == null) {
        return;
    }
    this.marked[v] = true;

    if (this.adj[v] != null) {
        console.log('访问过的节点：' + v);
    }

    this.adj[v].forEach((w) => {
        if (!this.marked[w]) {
            this.dfs(w);
        }
    });
};

// 广度优先搜索
Graph.prototype.bfs = function (v) {
    if (v == null) {
        return;
    }
    this.marked[v] = true;

    // 待访问的队列
    let queue = [];

    queue.push(v);
    while (queue.length) {
        let w = queue.shift();

        // 把未访问的加入队列中
        this.adj[w].forEach((t) => {
            if (!this.marked[t]) {
                this.marked[t] = true;
                this.edgeTo[t] = w;
                queue.push(t);
            }
        });
        
        console.log('访问过的节点：' + w, this.edgeTo, this.adj);
    }
};

// 路径
// v 到 w 的路径
Graph.prototype.pathTo = function (v, w) {
    if (v == null || w == null) {
        return;
    }
    let path = [w],
        sideSize = this.edges;

    // 循环不得大于边的个数
    while (sideSize--) {
        if (w === v) {
            break;
        }
        w = this.edgeTo[w];
        path.push(w);
    }

    // 判断路径是否正确
    if (path[path.length - 1] === v) {
        return path.reverse();
    }

    return null;
};

// 显示图
Graph.prototype.display = function () {
    Object.keys(this.adj).forEach((key) => {
        console.log(key + ': ' + this.adj[key].toString());
    });
};


export default Graph;
