import React from 'react'
import { Box } from '@mui/material'

const HorizontalScrollbar = ({ data }) => {
  return (
    <div>
        Hello
        {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >
                    Hello
                </Box>
            )
        )}
    </div>
  )
}

export default HorizontalScrollbar