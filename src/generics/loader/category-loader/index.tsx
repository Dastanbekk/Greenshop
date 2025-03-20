import { Card, Divider, Skeleton } from 'antd'

const CategoryLoader = () => {
  return (
    <div>
    {/* Categories Skeleton */}
    <Card>
      <Skeleton active title={false} paragraph={{ rows: 8 }} />
    </Card>

    <Divider />

    {/* Price Range Skeleton */}
    <Card>
      <Skeleton.Input style={{ width: 200, height: 8 }} active />
      <Skeleton.Input
        style={{ width: 150, height: 8, marginTop: 8 }}
        active
      />
      <Skeleton.Button
        style={{ width: "100%", marginTop: 16 }}
        active
      />
    </Card>

    <Divider />

    {/* Size Skeleton */}
    <Card>
      <Skeleton active title={false} paragraph={{ rows: 3 }} />
    </Card>

    <Divider />

    {/* Super Sale Skeleton */}
    <Card>
      <Skeleton.Image style={{ width: "100%", height: 150 }} />
      <Skeleton.Button
        style={{ width: "100%", marginTop: 16 }}
        active
      />
    </Card>
  </div>
  )
}

export default CategoryLoader