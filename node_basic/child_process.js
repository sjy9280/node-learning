// 1.怎么开启一个子进程
//   spawn 启动一个新进程并与其进行流式通信
//   exec 执行外部命令，返回标准输出
//   fork 专门用于创建Node.js子进程，并进行进程间通信

import { spawn, exec, fork } from 'child_process'

exec('ls -al', (error, stdout, stderr) => {
  console.log("~ stdout:", stdout)
})

spawn('ls', ['-al']).stdout.on('data', (data) => {
  console.log("~ data:", data.toString())
})

const { stdout } = spawn('node', ['./process.js'])

stdout.on('data', (data) => {
  console.log("~ data:", data.toString())
})