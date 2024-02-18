import { Container } from '@mui/system'
import React from 'react'

function Events() {
    const events=['story telling','essay writing','poetry','speech','debate'];
  return (
    <div>
        <Container>
          { events.map((item)=>{
                return(
                    <Button>{item}</Button>
                )
           })}
        </Container>
    </div>
  )
}

export default Events