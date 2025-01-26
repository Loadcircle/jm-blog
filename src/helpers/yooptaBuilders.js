import NextImage from 'next/image';
import Paragraph from "@yoopta/paragraph";
import Blockquote from '@yoopta/blockquote';
import Accordion from '@yoopta/accordion';
import Code from '@yoopta/code';
import Embed from '@yoopta/embed';
import Image from '@yoopta/image';
import File from '@yoopta/file';
import Link from '@yoopta/link';
import Table from '@yoopta/table';
import Divider from '@yoopta/divider';
import { HeadingOne, HeadingThree, HeadingTwo } from '@yoopta/headings';
import ActionMenu, { DefaultActionMenuRender } from '@yoopta/action-menu-list';
import Toolbar, { DefaultToolbarRender } from '@yoopta/toolbar';
import { Bold, Italic, CodeMark, Underline, Strike, Highlight } from '@yoopta/marks';
import LinkTool, { DefaultLinkToolRender } from '@yoopta/link-tool';
import { uploadToCloudinary } from "@/helpers/FEDHelpers";

const MARKS = [Bold, Italic, CodeMark, Underline, Strike, Highlight];

const TOOLS = {
  Toolbar: {
    tool: Toolbar,
    render: DefaultToolbarRender,
  },
  ActionMenu: {
    tool: ActionMenu,
    render: DefaultActionMenuRender,
  },
  LinkTool: {
    tool: LinkTool,
    render: DefaultLinkToolRender,
  },
};

const PLUGINS = [
    Paragraph,
    Blockquote,
    HeadingOne,
    HeadingTwo,
    HeadingThree,
    Accordion,
    Code,
    Embed,
    Link,
    Table,
    Divider,
    Image.extend({
      renders: {
        image: (props) => {
          const { children, element, attributes } = props;
          
          return (
            // [NOTE] passing attributes is required
            <div {...attributes}>
              <NextImage
                src={element.props.src}
                alt={element.props.alt ? element.props.alt : "Default alt"}
                width={element.props.sizes.width}
                height={element.props.sizes.height}
              />
              {/* [NOTE] passing children is required */}
              {children}
            </div>
          );
        }
      },
      options: {
        onUpload: async (file) => {
          const data = await uploadToCloudinary(file, 'image');
          return {
            src: data.secure_url,
            sizes: {
              width: data.width,
              height: data.height,
            },
          };
        },
      }
    })
];

export { MARKS, PLUGINS, TOOLS };