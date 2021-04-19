import React from 'react'

const UseEffectAPI = (children) => {
  return (
    <div>
      <ul>
        {children.post.map((data) => (
          <li key={data.id}>{data.title}</li>
        ))}
      </ul>
    </div>
  )
}

export {UseEffectAPI};
