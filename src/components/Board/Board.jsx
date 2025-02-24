import React from 'react'
import './Board.css'
import Card from '../Card/Card'

// Import local images from assets folder
import sqlImg from '../../assets/sql.png'
import bitManipulationImg from '../../assets/bit_manipulation.png'
import heapsImg from '../../assets/heaps.png'
import graphsImg from '../../assets/graphs.png'
import linkedListImg from '../../assets/linked_list.png'
import recursion1Img from '../../assets/recursion1.png'
import recursion2Img from '../../assets/recursion2.png'
import dpImg from '../../assets/dp.png'
import binaryTreeImg from '../../assets/binary_tree.png'
import bstImg from '../../assets/bst.png'
import nArrayTreeImg from '../../assets/narray_tree.png'
import trieImg from '../../assets/trie.png'
import binarySearchImg from '../../assets/binary_search.png'
import queuesStackImg from '../../assets/queues_stack.png'
import hashMapsImg from '../../assets/hashmaps.png'
import arraysStringsImg from '../../assets/arrays_strings.png'


const resources = [
  { id: 1, topic: 'SQL', img: sqlImg, link: 'https://leetcode.com/explore/learn/card/sql-language' },
  { id: 2, topic: 'Bit Manipulation', img: bitManipulationImg, link: 'https://leetcode.com/explore/learn/card/bit-manipulation/' },
  { id: 3, topic: 'Heaps', img: heapsImg, link: 'https://leetcode.com/explore/learn/card/heap/' },
  { id: 4, topic: 'Graphs', img: graphsImg, link: 'https://leetcode.com/explore/learn/card/graph/' },
  { id: 5, topic: 'Linked List', img: linkedListImg, link: 'https://leetcode.com/explore/learn/card/linked-list/' },
  { id: 6, topic: 'Recursion 1', img: recursion1Img, link: 'https://leetcode.com/explore/learn/card/recursion/' },
  { id: 7, topic: 'Recursion 2', img: recursion2Img, link: 'https://leetcode.com/explore/learn/card/recursion/' },
  { id: 8, topic: 'DP', img: dpImg, link: 'https://leetcode.com/explore/learn/card/dynamic-programming/' },
  { id: 9, topic: 'Binary Tree', img: binaryTreeImg, link: 'https://leetcode.com/explore/learn/card/binary-tree/' },
  { id: 10, topic: 'BST', img: bstImg, link: 'https://leetcode.com/explore/learn/card/binary-search-tree/' },
  { id: 11, topic: 'N-array Tree', img: nArrayTreeImg, link: 'https://leetcode.com/explore/learn/card/tree/' },
  { id: 12, topic: 'Trie', img: trieImg, link: 'https://leetcode.com/explore/learn/card/trie/' },
  { id: 13, topic: 'Binary Search', img: binarySearchImg, link: 'https://leetcode.com/explore/learn/card/binary-search/' },
  { id: 14, topic: 'Queues & Stack', img: queuesStackImg, link: 'https://leetcode.com/explore/learn/card/queue/' },
  { id: 15, topic: 'HashMaps', img: hashMapsImg, link: 'https://leetcode.com/explore/learn/card/hash-table/' },
  { id: 16, topic: 'Arrays & Strings', img: arraysStringsImg, link: 'https://leetcode.com/explore/learn/card/arrays-and-strings/' }
]

function Board() {
  return (
    <div className="board-container">
      {resources.map(resource => (
        <Card 
          key={resource.id}
          topic={resource.topic}
          img={resource.img}
          link={resource.link}
        />
      ))}
    </div>
  )
}

export default Board