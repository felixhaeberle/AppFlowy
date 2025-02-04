export const ColorPalette = () => {
  return (
    <div className={'p-8'}>
      <h1 className={'mb-4 text-2xl'}>Colors</h1>
      <h2 className={'mb-4'}>Main</h2>
      <div className={'mb-8 flex flex-wrap items-center'}>
        <div title={'main-accent'} className={'m-2 h-[100px] w-[100px] bg-fill-default'}></div>
        <div title={'main-hovered'} className={'m-2 h-[100px] w-[100px] bg-fill-hover'}></div>
        <div title={'main-secondary'} className={'m-2 h-[100px] w-[100px] bg-fill-hover'}></div>
        <div title={'main-selector'} className={'m-2 h-[100px] w-[100px] bg-fill-selector'}></div>
        <div title={'main-alert'} className={'m-2 h-[100px] w-[100px] bg-function-info'}></div>
        <div title={'main-warning'} className={'m-2 h-[100px] w-[100px] bg-function-warning'}></div>
        <div title={'main-success'} className={'m-2 h-[100px] w-[100px] bg-function-success'}></div>
      </div>
      <h2 className={'mb-4'}>Tint</h2>
      <div className={'mb-8 flex flex-wrap items-center text-content-onfill'}>
        <div title={'tint-1'} className={'m-2 h-[100px] w-[100px] bg-tint-1'}></div>
        <div title={'tint-2'} className={'m-2 h-[100px] w-[100px] bg-tint-2'}></div>
        <div title={'tint-3'} className={'m-2 h-[100px] w-[100px] bg-tint-3'}></div>
        <div title={'tint-4'} className={'m-2 h-[100px] w-[100px] bg-tint-4'}></div>
        <div title={'tint-5'} className={'m-2 h-[100px] w-[100px] bg-tint-5'}></div>
        <div title={'tint-6'} className={'m-2 h-[100px] w-[100px] bg-tint-6'}></div>
        <div title={'tint-7'} className={'m-2 h-[100px] w-[100px] bg-tint-7'}></div>
        <div title={'tint-8'} className={'m-2 h-[100px] w-[100px] bg-tint-8'}></div>
        <div title={'tint-9'} className={'m-2 h-[100px] w-[100px] bg-tint-9'}></div>
      </div>
      <h2 className={'mb-4'}>Shades</h2>
      <div className={'mb-8 flex flex-wrap items-center'}>
        <div title={'shade-1'} className={'bg-shade-1 m-2 h-[100px] w-[100px]'}></div>
        <div title={'shade-2'} className={'bg-shade-2 m-2 h-[100px] w-[100px]'}></div>
        <div title={'shade-3'} className={'bg-shade-3 m-2 h-[100px] w-[100px]'}></div>
        <div title={'shade-4'} className={'bg-shade-4 m-2 h-[100px] w-[100px]'}></div>
        <div title={'shade-5'} className={'bg-shade-5 m-2 h-[100px] w-[100px]'}></div>
        <div title={'shade-6'} className={'bg-shade-6 m-2 h-[100px] w-[100px]'}></div>
      </div>
      <h2 className={'mb-4'}>Surface</h2>
      <div className={'mb-8 flex flex-wrap items-center'}>
        <div title={'surface-1'} className={'bg-surface-1 m-2 h-[100px] w-[100px]'}></div>
        <div title={'surface-2'} className={'bg-surface-2 m-2 h-[100px] w-[100px]'}></div>
        <div title={'surface-3'} className={'bg-surface-3 m-2 h-[100px] w-[100px]'}></div>
        <div title={'surface-4'} className={'bg-surface-4 m-2 h-[100px] w-[100px]'}></div>
      </div>
    </div>
  );
};
